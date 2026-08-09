# Idea Ledger release evidence

The browser suite is an independent acceptance layer. It tests the public behavior and does
not import product implementation modules.

## Local candidate

From a clean checkout:

```powershell
npm ci
npm run check
npx playwright install chromium
npm run test:e2e
Copy-Item dist/index.html dist/404.html -Force
npm run check:export -- --base=/
```

`test:e2e` owns a production build and preview server on `127.0.0.1:43129`. Set
`PLAYWRIGHT_BASE_URL` to test an already-running or deployed candidate without starting a
local server. Set `PLAYWRIGHT_PORT` if `43129` is occupied, and set `VITE_BASE_PATH` when
exercising a GitHub Pages project subpath.

WebKit is opt-in locally so an unavailable Safari engine does not block Chromium evidence:

```powershell
$env:PLAYWRIGHT_WEBKIT='true'
npx playwright install webkit
npx playwright test --project=webkit tests/e2e/ledger.spec.ts tests/e2e/responsive-keyboard.spec.ts
```

The Pages workflow derives `/` for an `<owner>.github.io` repository and `/<repository>/`
for a project site. A manual release is authorized only from the default branch when the
operator supplies the exact 40-character commit SHA that received the public-content review.

## Evidence to retain

- candidate commit and canonical `docs/idea-database.json` SHA-256;
- `src/generated/idea-ledger/manifest.json` and its source hash;
- clean-install validation, generator, typecheck, lint, and unit-test results;
- Playwright HTML report, failure traces, screenshots, and videos;
- `check-export` report and a sorted SHA-256 list for every `dist/` file;
- GitHub Pages job URL and final public smoke result.

The workflow in `.github/workflows/pages.yml` runs verification for pull requests but deploys
only after a manual workflow dispatch whose operator explicitly confirms the corpus is suitable
for a public URL. It uploads the exact `dist/` tree that passed the export check; it does not
rebuild in the deploy job.

## Manual peer review

A reviewer who did not implement the candidate should answer these from the preview without
instruction:

1. Why did the 4×6 Amazon label idea die, and which incumbent caused that decision?
2. How many high-fit ideas are currently validating?
3. Which ideas explicitly failed because they would be a second app?
4. What must change before PlugLatch can be resurrected?
5. Which displayed research evidence is directly anchored, merely mentioned, or absent?

Fail the release if the reviewer cannot retrieve the first answer within 30 seconds, if passed
ideas are hidden by default, or if visual polish obscures decision reasons and resurrection
conditions.
