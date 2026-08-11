#!/usr/bin/env node

import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));
const RUN_ROOT = path.join(ROOT, 'research-runs', 'mclovin');
const POLL_MS = 2_000;
const MAX_OUTPUT_BYTES = 12 * 1024 * 1024;
const ANSI = { reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m', cream: '\x1b[38;5;230m', gold: '\x1b[38;5;221m', green: '\x1b[38;5;114m', red: '\x1b[38;5;210m', blue: '\x1b[38;5;117m', clear: '\x1b[2J\x1b[H', hide: '\x1b[?25l', show: '\x1b[?25h' };

const engineCommands = {
  cream: {
    command: 'cream',
    args: (prompt, packet) => [
      '-p', prompt,
      '--name', `mclovin-${packet.id}`,
      '--stampede',
      '--max-wall-time', '1.5h',
      '--max-tool-calls', '120',
      '--max-turns', '40',
      '--output-format', 'text',
    ],
  },
};

function parseArgs(argv) {
  const args = argv.slice(2).reduce((result, value, index, values) => {
    if (!value.startsWith('--')) return result;
    const [key, inline] = value.slice(2).split('=', 2);
    result[key] = inline ?? (values[index + 1]?.startsWith('--') ? true : values[index + 1]);
    return result;
  }, {});
  const run = args.run;
  if (!run) throw new Error('--run is required (run path or run id)');
  const concurrency = Number(args.concurrency ?? 3);
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 12) throw new Error('--concurrency must be an integer from 1 to 12');
  const engines = String(args.engines ?? 'cream').split(',').map((engine) => engine.trim()).filter(Boolean);
  if (!engines.every((engine) => engine in engineCommands)) throw new Error(`Unknown engine. Use: ${Object.keys(engineCommands).join(', ')}`);
  return { run, concurrency, engines };
}

async function commandExists(command) {
  return new Promise((resolve) => {
    const executable = process.platform === 'win32' ? 'where.exe' : 'sh';
    const args = process.platform === 'win32' ? [command] : ['-lc', `command -v -- ${command}`];
    const child = spawn(executable, args, { stdio: 'ignore' });
    child.once('exit', (code) => resolve(code === 0));
    child.once('error', () => resolve(false));
  });
}

function resolveRunDir(run) {
  if (path.isAbsolute(run)) return run;
  const normalized = run.replaceAll('\\', '/');
  return normalized.startsWith('research-runs/') ? path.resolve(ROOT, run) : path.resolve(RUN_ROOT, run);
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, 'utf8'));
}

async function acquireLock(runDir) {
  const lockFile = path.join(runDir, '.supervisor.lock');
  try {
    const handle = await fs.open(lockFile, 'wx');
    await handle.writeFile(`${process.pid}\n`);
    return async () => {
      await handle.close();
      await fs.rm(lockFile, { force: true });
    };
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
    const owner = Number.parseInt((await readText(lockFile, '')).trim(), 10);
    if (processIsAlive(owner)) throw new Error(`Another MCLOVIN supervisor already owns ${lockFile} (pid ${owner})`);
    await fs.rm(lockFile, { force: true });
    const handle = await fs.open(lockFile, 'wx');
    await handle.writeFile(`${process.pid}\n`);
    return async () => {
      await handle.close();
      await fs.rm(lockFile, { force: true });
    };
  }
}

async function readText(file, fallback = '') {
  try { return await fs.readFile(file, 'utf8'); } catch { return fallback; }
}

async function writeJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const temp = `${file}.tmp-${process.pid}-${Date.now()}`;
  try {
    await fs.writeFile(temp, `${JSON.stringify(value, null, 2)}\n`);
    await fs.rename(temp, file);
  } finally {
    await fs.rm(temp, { force: true }).catch(() => {});
  }
}

function formatDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return hours ? `${hours}h ${String(minutes).padStart(2, '0')}m` : `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

function progressBar(value, width = 34) {
  const filled = Math.round(Math.max(0, Math.min(1, value)) * width);
  return `${ANSI.gold}${'█'.repeat(filled)}${ANSI.dim}${'░'.repeat(width - filled)}${ANSI.reset}`;
}

function renderDashboard(run, active, frame = 0) {
  const packets = run.packets;
  const counts = packets.reduce((result, packet) => { result[packet.status] = (result[packet.status] || 0) + 1; return result; }, {});
  const done = (counts.complete || 0) + (counts.failed || 0);
  const progress = packets.length ? done / packets.length : 0;
  const deadline = Date.parse(run.deadlineAt);
  const elapsed = Date.now() - Date.parse(run.workerSupervisor.startedAt);
  const remaining = Math.max(0, deadline - Date.now());
  const round = run.round || 1;
  const spinner = ['◐', '◓', '◑', '◒'][frame % 4];
  const statusColor = run.workerSupervisor.status === 'running' ? ANSI.green : ANSI.gold;
  const lines = [
    `${ANSI.clear}${ANSI.bold}${ANSI.cream}        .-"""-.${ANSI.reset}`,
    `${ANSI.bold}${ANSI.cream}       /  o o  \\${ANSI.reset}   ${ANSI.gold}CREAM MCLOVIN${ANSI.reset}`,
    `${ANSI.bold}${ANSI.cream}      |    ^    |${ANSI.reset}   ${ANSI.dim}autonomous research control room${ANSI.reset}`,
    `${ANSI.bold}${ANSI.cream}       \\  '-'  /${ANSI.reset}`,
    `${ANSI.bold}${ANSI.cream}        '-...-'${ANSI.reset}    ${ANSI.dim}${run.runId}${ANSI.reset}`,
    '',
    `${ANSI.bold}${statusColor}${spinner} ${run.workerSupervisor.status.toUpperCase()}${ANSI.reset}  ${ANSI.dim}Cream workers only · round ${round} · ${run.workerSupervisor.roundsCompleted || 0} rounds completed${ANSI.reset}`,
    `${progressBar(progress)} ${ANSI.bold}${Math.round(progress * 100)}%${ANSI.reset}  ${done}/${packets.length} packets settled`,
    `${ANSI.dim}elapsed${ANSI.reset} ${formatDuration(elapsed)}   ${ANSI.dim}remaining${ANSI.reset} ${formatDuration(remaining)}   ${ANSI.dim}concurrency${ANSI.reset} ${run.workerSupervisor.concurrency}`,
    '',
    `${ANSI.bold}${ANSI.cream}PACKET BOARD${ANSI.reset}`,
    ...packets.map((packet) => {
      const icon = { complete: '✓', failed: '×', running: spinner, pending: '·' }[packet.status] || '?';
      const color = { complete: ANSI.green, failed: ANSI.red, running: ANSI.blue, pending: ANSI.dim }[packet.status] || ANSI.reset;
      const worker = packet.engine ? ` ${ANSI.dim}via ${packet.engine}${ANSI.reset}` : '';
      return `${color}${icon}${ANSI.reset} ${packet.id.padEnd(32)} ${color}${packet.status.padEnd(9)}${ANSI.reset}${worker}`;
    }),
    '',
    `${ANSI.dim}active workers: ${active.size}  |  reports: ${counts.complete || 0}  |  failures: ${counts.failed || 0}${ANSI.reset}`,
    `${ANSI.dim}Ctrl-C stops workers cleanly${ANSI.reset}`,
  ];
  process.stdout.write(lines.join('\n'));
}
function processIsAlive(pid) {
  if (!pid || pid === process.pid) return false;
  try { process.kill(pid, 0); return true; } catch { return false; }
}
function settled(packet) {
  return packet?.status === 'complete' || packet?.status === 'failed';
}

function ready(packet, packets) {
  return packet.status === 'pending' && packet.dependsOn.every((dependency) => settled(packets.find((candidate) => candidate.id === dependency)));
}

function createNextRound(run) {
  const nextRound = (run.round || 1) + 1;
  const previous = run.packets;
  const ids = new Map(previous.map((packet) => [packet.id, `r${nextRound}-${packet.id.replace(/^r\d+-/, '')}`]));
  run.packets = previous.map((packet) => ({
    ...packet,
    id: ids.get(packet.id),
    dependsOn: packet.dependsOn.map((dependency) => ids.get(dependency) || dependency),
    status: 'pending',
    output: null,
    log: null,
    engine: null,
    pid: null,
    startedAt: null,
    finishedAt: null,
    exitCode: null,
    error: null,
    round: nextRound,
  }));
  run.round = nextRound;
  run.workerSupervisor.lastRoundCompletedAt = new Date().toISOString();
  return nextRound;
}

function promptFor(run, packet, runDir, handoff) {
  const dependencyText = packet.dependsOn.length === 0
    ? 'You are an independent lane. Do not inspect other packet outputs and do not anchor on any favorite idea.'
    : `This is a dependent review lane. Read completed dependency outputs from ${path.join(runDir, 'outputs')} for: ${packet.dependsOn.join(', ')}. Some dependencies may have failed; treat missing reports as explicit research debt, do not invent their findings, and proceed with the evidence that exists.`;
  return `You are one persistent research worker in MCLOVIN run ${run.runId}. Work in the repository at ${ROOT}.

COORDINATOR HANDOFF FROM CREAM:
${handoff}

ROLE: ${packet.role}
OBJECTIVE: ${packet.objective}
DEADLINE: ${run.deadlineAt}

${dependencyText}

Read the repository instructions, canonical Ledger, prior research, rejection records, and current project context as needed. Use web research aggressively where relevant. This is evidence-driven research, not filler brainstorming. Search for contradictory evidence and competitors. Do not edit canonical files, generated artifacts, package files, or source code. Return a durable report only; the supervisor captures your response into the run output.

Every important claim must be labeled FACT, INFERENCE, HYPOTHESIS, or SYNTHETIC_FEEDBACK. Simulated focus groups are not real customer evidence. Cite URLs and retrieval dates for external evidence. Deduplicate against existing ideas and explicitly link similar records. Record rejected concepts, why they died, and reopening conditions. Prefer a small number of well-supported opportunities over a long list.

Return Markdown with: executive verdict; sources; findings; contradictions; opportunity seeds; competitor/substitute notes; phone/state/trust test; monetization and distribution; hard kill gates; recommended next experiments; research debt. Do not claim work you did not perform.`;
}

async function runWorker({ run, packet, runDir, engine, logsDir, handoff, onSpawn }) {
  const spec = engineCommands[engine];
  const logFile = path.join(logsDir, `${packet.id}.log`);
  const started = new Date().toISOString();
  const output = [];
  let outputBytes = 0;
  let logQueue = Promise.resolve();
  const child = spawn(spec.command, spec.args(promptFor(run, packet, runDir, handoff), packet), {
    cwd: ROOT,
    env: { ...process.env, NO_COLOR: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false,
  });
  const log = await fs.open(logFile, 'a');
  onSpawn?.(child);
  const append = (chunk) => {
    const text = chunk.toString();
    logQueue = logQueue.then(() => log.write(text));
    if (outputBytes < MAX_OUTPUT_BYTES) {
      const accepted = Buffer.from(text).subarray(0, MAX_OUTPUT_BYTES - outputBytes).toString();
      output.push(accepted);
      outputBytes += Buffer.byteLength(accepted);
    }
  };
  child.stdout.on('data', append);
  child.stderr.on('data', (chunk) => append(`[stderr] ${chunk.toString()}`));
  const exit = await new Promise((resolve) => {
    child.once('error', (error) => resolve({ code: 1, signal: null, error: error.message }));
    child.once('exit', (code, signal) => resolve({ code: code ?? 1, signal, error: null }));
  });
  await logQueue;
  await log.close();
  const report = output.join('').trim();
  const outputFile = path.join(runDir, 'outputs', `${packet.id}.md`);
  await fs.writeFile(outputFile, `# ${packet.id}\n\n- Engine: ${engine}\n- Started: ${started}\n- Finished: ${new Date().toISOString()}\n- Exit code: ${exit.code}\n\n${report || '_Worker produced no report. See the log file._'}\n`);
  return { ...exit, engine, output: path.relative(ROOT, outputFile), log: path.relative(ROOT, logFile) };
}

async function main() {
  const { run: runArg, concurrency, engines } = parseArgs(process.argv);
  const runDir = resolveRunDir(runArg);
  const manifestFile = path.join(runDir, 'manifest.json');
  const run = await readJson(manifestFile);
  const logsDir = path.join(runDir, 'logs');
  await fs.mkdir(logsDir, { recursive: true });
  const available = [];
  for (const engine of engines) if (await commandExists(engineCommands[engine].command)) available.push(engine);
  if (available.length === 0) throw new Error('Cream CLI is not available. Install/sign in to Cream, then retry.');
  const releaseLock = await acquireLock(runDir);
  const staleAfterMs = 10 * 60 * 1000;
  for (const packet of run.packets) {
    if (packet.status !== 'running') continue;
    const age = Date.now() - Date.parse(packet.startedAt || 0);
    if (age > staleAfterMs || (packet.pid && !processIsAlive(packet.pid))) {
      packet.status = 'pending';
      packet.recoveredAt = new Date().toISOString();
      packet.recoveryReason = 'stale running packet recovered by new supervisor';
      delete packet.engine;
      delete packet.pid;
    }
  }
  const handoff = await readText(path.join(runDir, 'CREAM-HANDOFF.md'), 'No coordinator handoff was provided. Load repository instructions and prior research yourself.');
  run.workerSupervisor = {
    ...run.workerSupervisor,
    pid: process.pid,
    startedAt: new Date().toISOString(),
    concurrency,
    engines: available,
    status: 'running',
    round: run.round || 1,
    roundsCompleted: run.workerSupervisor?.roundsCompleted || 0,
  };
  await writeJson(manifestFile, run);

  let nextEngine = 0;
  const active = new Map();
  const childProcesses = new Map();
  const deadline = Date.parse(run.deadlineAt);
  const dashboard = Boolean(process.stdout.isTTY);
  const render = () => { if (dashboard) renderDashboard(run, active, Math.floor(Date.now() / POLL_MS)); };
  if (dashboard) process.stdout.write(ANSI.hide);

  if (dashboard) render();
  else {
    console.log(`MCLOVIN supervisor ${run.runId}`);
    console.log(`Cream engines: ${available.join(', ')} | concurrency: ${concurrency} | deadline: ${run.deadlineAt}`);
  }

  const stop = async (reason) => {
    run.workerSupervisor.status = reason;
    run.workerSupervisor.finishedAt = new Date().toISOString();
    for (const child of childProcesses.values()) child.kill('SIGTERM');
    await writeJson(manifestFile, run);
    if (dashboard) { render(); process.stdout.write(`\n${ANSI.show}`); }
  };
  process.once('SIGTERM', () => void stop('stopped_by_operator').finally(async () => { await releaseLock(); process.exit(143); }));
  process.once('SIGINT', () => void stop('stopped_by_operator').finally(async () => { await releaseLock(); process.exit(130); }));

  while (Date.now() < deadline) {
    const packets = run.packets;
    for (const packet of packets) {
      if (active.size >= concurrency) break;
      if (!ready(packet, packets) || active.has(packet.id)) continue;
      const engine = available[nextEngine++ % available.length];
      packet.status = 'running';
      packet.engine = engine;
      packet.pid = null;
      packet.startedAt = new Date().toISOString();
      const task = runWorker({ run, packet, runDir, engine, logsDir, handoff, onSpawn: (child) => {
        packet.pid = child.pid;
        childProcesses.set(packet.id, child);
      } });
      active.set(packet.id, task);
      if (dashboard) render(); else console.log(`[start] ${packet.id} via ${engine}`);
      task.then(async (result) => {
        packet.status = result.code === 0 ? 'complete' : 'failed';
        packet.finishedAt = new Date().toISOString();
        packet.output = result.output;
        packet.log = result.log;
        packet.exitCode = result.code;
        if (result.error) packet.error = result.error;
        active.delete(packet.id);
        childProcesses.delete(packet.id);
        await writeJson(manifestFile, run);
        if (dashboard) render(); else console.log(`[${packet.status}] ${packet.id} (${result.code})`);
      }).catch(async (error) => {
        packet.status = 'failed';
        packet.error = error.message;
        active.delete(packet.id);
        childProcesses.delete(packet.id);
        await writeJson(manifestFile, run);
        if (dashboard) render(); else console.error(`[failed] ${packet.id}: ${error.message}`);
      });
    }
    await writeJson(manifestFile, run);
    const settledCount = packets.filter((packet) => settled(packet)).length;
    const readyCount = packets.filter((packet) => ready(packet, packets)).length;
    if (active.size === 0 && settledCount < packets.length && readyCount === 0) {
      const blocked = packets.filter((packet) => packet.status === 'pending').map((packet) => `${packet.id}: ${packet.dependsOn.join(', ') || 'none'}`);
      run.workerSupervisor.status = 'deadlock_recovered';
      run.workerSupervisor.deadlock = { at: new Date().toISOString(), blocked };
      for (const packet of packets) {
        if (packet.status !== 'pending') continue;
        packet.status = 'failed';
        packet.error = 'No runnable dependency-ready packet; supervisor marked it failed to avoid idle looping.';
        packet.finishedAt = new Date().toISOString();
      }
      await writeJson(manifestFile, run);
      if (dashboard) render(); else console.error(`[deadlock] marked ${blocked.length} packets failed`);
      continue;
    }
    const finished = run.packets.every((packet) => settled(packet));
    if (finished && active.size === 0) {
      if (Date.now() >= deadline) break;
      const finishedRound = run.round || 1;
      const completed = run.packets.filter((packet) => packet.status === 'complete').length;
      run.workerSupervisor.roundsCompleted += 1;
      run.workerSupervisor.lastRound = { round: finishedRound, completed, failed: run.packets.length - completed, finishedAt: new Date().toISOString() };
      createNextRound(run);
      await writeJson(manifestFile, run);
      if (dashboard) render(); else console.log(`[round ${finishedRound} complete] starting round ${run.round}`);
      continue;
    }
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
  }
  if (Date.now() >= deadline) await stop('deadline_reached');
  else if (run.packets.every((packet) => packet.status === 'complete')) await stop('complete');
  else await stop('stopped_with_failures');
  await releaseLock();
  if (dashboard) { render(); process.stdout.write(`\n${ANSI.show}`); }
  else console.log(`Supervisor stopped: ${run.workerSupervisor.status}`);
}

main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
