import fs from 'node:fs';

import { expect, test as base } from '@playwright/test';

interface RouteManifest {
  ideaRoutes: string[];
  researchRoutes: string[];
}

interface CatalogArtifact {
  ideas: Array<{ id: string; name: string; route: string }>;
}

interface ResearchArtifact {
  documents: Array<{ route: string; slug: string; title: string }>;
}

const routeManifest = JSON.parse(
  fs.readFileSync('src/generated/idea-ledger/routes.json', 'utf8'),
) as RouteManifest;
const catalog = JSON.parse(
  fs.readFileSync('src/generated/idea-ledger/catalog.json', 'utf8'),
) as CatalogArtifact;
const research = JSON.parse(
  fs.readFileSync('src/generated/idea-ledger/research-documents.json', 'utf8'),
) as ResearchArtifact;

const test = base.extend<{ runtimeErrors: string[] }>({
  runtimeErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(`console: ${message.text()}`);
    });
    page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
    await use(errors);
    expect(errors, 'browser runtime errors').toEqual([]);
  }, { auto: true }],
});

test('presents the whole database as the durable home', async ({ page }) => {
  await page.goto('');

  await expect(page.getByRole('heading', { level: 1, name: 'The idea database' })).toBeVisible();
  await expect(page.getByText('Conversation creates the work. The ledger keeps the memory.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Every decision stays visible' })).toBeVisible();
  await expect(page.getByRole('link', { name: /152 All ideas/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /129 Passed decisions/ })).toBeVisible();
  await expect(page.getByText(/Round-8 recommendation/i)).toHaveCount(0);
});

test('loads and reloads an idea route directly', async ({ page }) => {
  await page.goto('ideas/amazon-label-handoff');

  await expect(page.getByRole('heading', { level: 1, name: 'LabelRelay' })).toBeVisible();
  await expect(page.getByText(/Label Expert already performs the exact import\/crop\/print loop/)).toBeVisible();
  await expect(
    page.getByText(/major marketplace or thermal-printer vendor requests a sanctioned deeply integrated mobile label flow/i),
  ).toBeVisible();

  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'LabelRelay' })).toBeVisible();
});

test('loads a research route and honors a generated heading anchor', async ({ page }) => {
  await page.goto(
    'research/idea-mining-loop-2026-08-08#1-media-card-custody--conditional-go',
  );

  await expect(
    page.getByRole('heading', { level: 1, name: 'Idea Mining Loop — 2026-08-08' }),
  ).toBeVisible();
  const target = page.locator('[id="1-media-card-custody--conditional-go"]');
  await expect(target).toBeVisible();
  await expect.poll(async () => {
    const box = await target.boundingBox();
    return box ? box.y : Number.POSITIVE_INFINITY;
  }).toBeLessThan(900);
});

test('renders honest not-found states instead of a blank application', async ({ page }) => {
  await page.goto('ideas/not-a-canonical-id');
  await expect(page.getByText('Idea not found')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search the ledger' })).toBeVisible();

  await page.goto('research/not-a-dossier');
  await expect(page.getByText('Dossier not found')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Return to the ledger' })).toBeVisible();
});

test('compares canonical decisions directly without inventing an aggregate score', async ({ page }) => {
  await page.goto('compare?ids=weed-check,lot-match');

  await expect(page.getByRole('heading', { level: 1, name: 'Compare ideas' })).toBeVisible();
  const table = page.getByRole('table', { name: 'Side-by-side idea decision comparison' });
  await expect(table.getByRole('columnheader', { name: /WeedCheck/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /LotMatch/ })).toBeVisible();
  await expect(table.getByRole('rowheader', { name: 'Why this status' })).toBeVisible();
  await expect(table.getByRole('rowheader', { name: 'What changes the decision' })).toBeVisible();
  await expect(page.getByText(/No composite score/)).toBeVisible();

  await page.reload();
  await expect(table.getByRole('columnheader', { name: /WeedCheck/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /LotMatch/ })).toBeVisible();
});

test('reports and ignores unknown comparison IDs', async ({ page }) => {
  await page.goto('compare?ids=weed-check,not-real,lot-match,weed-check');

  await expect(page.getByRole('status')).toContainText('Unknown IDs were ignored:');
  await expect(page.getByRole('status')).toContainText('not-real');
  const table = page.getByRole('table', { name: 'Side-by-side idea decision comparison' });
  await expect(table.getByRole('columnheader', { name: /WeedCheck/ })).toHaveCount(1);
  await expect(table.getByRole('columnheader', { name: /LotMatch/ })).toHaveCount(1);
});

test('caps a hand-authored comparison URL at four canonical ideas', async ({ page }) => {
  await page.goto(
    'compare?ids=weed-check,lot-match,fabric-bolt-job-gate,crash-recoverable-field-recorder,appointment-cancel-by-clock',
  );

  const table = page.getByRole('table', { name: 'Side-by-side idea decision comparison' });
  await expect(table.locator('thead th')).toHaveCount(5);
  await expect(table.getByRole('columnheader', { name: /WeedCheck/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /LotMatch/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /CutBolt/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /CrashTape/ })).toBeVisible();
  await expect(table.getByRole('columnheader', { name: /CancelBy/ })).toHaveCount(0);
});

test('recovers from type-corrupted comparison storage', async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('idea-ledger:compare', JSON.stringify({ unexpected: true }));
  });
  await page.goto('compare');

  await expect(page.getByRole('heading', { level: 1, name: 'Compare ideas' })).toBeVisible();
  await expect(page.getByText('No comparison yet')).toBeVisible();
});

test('renders bare dossier source URLs as outbound links', async ({ page }) => {
  const sourceUrl =
    'https://www.commercebank.com/business/trends-and-insights/2026/accounts-payable-fraud';
  await page.goto('research/idea-mining-loop-2026-08-09-round7');

  const source = page.locator(`a[href="${sourceUrl}"]`);
  await expect(source).toHaveCount(1);
  await expect(source).toHaveAttribute('target', '_blank');
  await expect(source).toHaveAttribute('rel', /noreferrer/);
});

test('hydrates every generated entity route with its canonical heading', async ({ page }) => {
  test.setTimeout(180_000);
  const entities = [
    ...catalog.ideas.map((idea) => ({ heading: idea.name, id: idea.id, route: idea.route })),
    ...research.documents.map((document) => ({
      heading: document.title,
      id: document.slug,
      route: document.route,
    })),
  ];
  const failures: string[] = [];
  const runtimeErrors: string[] = [];
  let activeRoute = '';
  page.on('console', (message) => {
    if (message.type() === 'error') runtimeErrors.push(`${activeRoute}: console: ${message.text()}`);
  });
  page.on('pageerror', (error) => runtimeErrors.push(`${activeRoute}: page: ${error.message}`));

  for (const entity of entities) {
    activeRoute = entity.route;
    try {
      const response = await page.goto(entity.route.replace(/^\//, ''), {
        waitUntil: 'domcontentloaded',
      });
      if (!response?.ok()) failures.push(`${entity.route}: HTTP ${response?.status() ?? 'none'}`);
      const heading = page.getByRole('heading', { exact: true, level: 1, name: entity.heading });
      await heading.waitFor({ state: 'visible', timeout: 4_000 });
      if ((await heading.count()) !== 1) {
        failures.push(`${entity.route}: expected one H1 named ${JSON.stringify(entity.heading)}`);
      }
      const renderedId = entity.route.startsWith('/ideas/')
        ? await page.locator('code').filter({ hasText: entity.id }).count()
        : 1;
      if (!renderedId) failures.push(`${entity.route}: canonical ID ${entity.id} was not rendered`);
    } catch (error) {
      failures.push(`${entity.route}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  expect(runtimeErrors, 'per-route browser runtime errors').toEqual([]);
  expect(failures, 'generated routes that did not hydrate their canonical entity').toEqual([]);
});

test('crawls every generated route shell and every entry asset', async ({ request }, testInfo) => {
  const baseURL = String(testInfo.project.use.baseURL);
  const logicalRoutes = [
    '',
    'ideas',
    'compare',
    ...routeManifest.ideaRoutes.map((route) => route.replace(/^\//, '')),
    ...routeManifest.researchRoutes.map((route) => route.replace(/^\//, '')),
  ];
  const failures: string[] = [];

  for (let index = 0; index < logicalRoutes.length; index += 12) {
    const batch = logicalRoutes.slice(index, index + 12);
    await Promise.all(
      batch.map(async (route) => {
        const url = new URL(route, baseURL).toString();
        const response = await request.get(url);
        if (!response.ok()) failures.push(`${response.status()} ${url}`);
        else if (!(await response.text()).includes('Idea Ledger')) failures.push(`wrong shell ${url}`);
      }),
    );
  }

  const rootResponse = await request.get(baseURL);
  const rootHtml = await rootResponse.text();
  const references = [...rootHtml.matchAll(/\b(?:href|src)=["']([^"']+)["']/giu)]
    .map((match) => new URL(match[1], baseURL))
    .filter((url) => url.origin === new URL(baseURL).origin && /\.[A-Za-z0-9]{1,8}$/u.test(url.pathname));
  await Promise.all(
    references.map(async (url) => {
      const response = await request.get(url.toString());
      if (!response.ok()) failures.push(`${response.status()} asset ${url}`);
    }),
  );

  expect(failures, 'route and asset crawl failures').toEqual([]);
});
