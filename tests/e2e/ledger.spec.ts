import { expect, test as base, type Page } from '@playwright/test';

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

function ideaRow(page: Page, id: string) {
  return page.locator(`tr[data-idea-id="${id}"]`);
}

async function search(page: Page, query: string) {
  const input = page.getByRole('searchbox', {
    name: 'Search ideas, decisions, and resurrection conditions',
  });
  await input.fill(query);
  await input.press('Enter');
}

test.describe('decision retrieval', () => {
  test('keeps every status visible and retrieves an exact dead idea', async ({ page }) => {
    await page.goto('ideas');

    await expect(page.getByRole('heading', { level: 1, name: 'Idea ledger' })).toBeVisible();
    await expect(page.locator('tbody tr')).toHaveCount(416);
    await expect(page.getByText('Every status included')).toBeVisible();
    await expect(ideaRow(page, 'amazon-label-handoff')).toBeVisible();

    await search(page, 'LabelRelay');

    const row = ideaRow(page, 'amazon-label-handoff');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(row.getByRole('link', { name: 'LabelRelay' })).toBeVisible();
    await expect(row).toContainText('Label Expert already performs the exact import/crop/print loop');
  });

  test('normalizes the 4x6 alias without changing the winner', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'Amazon 4x6 Handoff');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'amazon-label-handoff')).toContainText('LabelRelay');

    await search(page, 'Amazon 4×6 Handoff');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'amazon-label-handoff')).toContainText('LabelRelay');
  });

  test('keeps a unique Round 9 name out of sibling idea results', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'CardReceipt');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'gift-card-receipt-match')).toContainText('CardReceipt');
    await expect(page.getByRole('region', { name: 'Research matches' })).toContainText(
      'Idea Mining Loop — Round 9',
    );
  });

  test('retrieves the Loop 2 parked test and its deduplicated EOB evidence', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'DeferralGap');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'retirement-deferral-gap')).toContainText('Parked');
    await expect(ideaRow(page, 'retirement-deferral-gap')).toContainText('not yet locatable');

    await search(page, 'EOBBill');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'medical-bill-auditor')).toContainText('Medical Bill and EOB Auditor');
  });

  test('retrieves a Loop 3 rejection and its merged outbox variant', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'RequestOutbox');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'shortcuts-http-outbox')).toContainText('PocketHook');

    await search(page, 'UploadTxn');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'share-handoff-shelf')).toContainText('ShareShelf');
  });

  test('retrieves a Loop 4 rejection and its merged playlist variant', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'StemPack Gate');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'stem-pack-gate')).toContainText('adjacent batch reporter');

    await search(page, 'MusicLibrary Filmstrip');
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'spotify-playlist-time-machine')).toContainText(
      'Spotify Playlist Time Machine',
    );
  });

  test('retrieves the video revisit lead and its exact paid gate', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'SpinLoop');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'spin-loop')).toContainText('Validating');
    await expect(ideaRow(page, 'spin-loop')).toContainText('visual demo is strong');

    await search(page, 'Cut Room');
    await expect(ideaRow(page, 'live-roll')).toContainText('Live Roll');
    await expect(page.locator('tbody tr').first()).toHaveAttribute('data-idea-id', 'live-roll');
  });

  test('retrieves the active BackPocket build and the Round 11 monetization lead', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'BackPocket.help');

    await expect(page.locator('tbody tr')).toHaveCount(1);
    await expect(ideaRow(page, 'backpocket-help')).toContainText('AI front office');
    await expect(ideaRow(page, 'backpocket-help')).toContainText('Validating');

    await search(page, 'Monetization Canary');
    await expect(page.locator('tbody tr')).toHaveCount(2);
    await expect(page.locator('tbody tr').first()).toHaveAttribute('data-idea-id', 'monetization-canary');
    await expect(ideaRow(page, 'monetization-canary')).toContainText('RevenueCat already owns diagnostic telemetry');
    await expect(ideaRow(page, 'canarycall')).toContainText('same family of');
  });

  test('searches decision reasons instead of only names', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'second app');

    await expect(ideaRow(page, 'barn-shift-baton')).toContainText('BarnBaton');
    await expect(ideaRow(page, 'barn-shift-baton')).toContainText('second app');
    await expect(ideaRow(page, 'grooming-scope-approval')).toContainText('GroomScope');
    await expect(ideaRow(page, 'grooming-scope-approval')).toContainText('second app');
    await expect(ideaRow(page, 'creator-portability')).toContainText('Creator Portability');
    const firstThree = await page.locator('tbody tr').evaluateAll((rows) =>
      rows.slice(0, 3).map((row) => row.getAttribute('data-idea-id')),
    );
    expect(firstThree.sort()).toEqual(
      ['barn-shift-baton', 'creator-portability', 'grooming-scope-approval'].sort(),
    );
  });

  test('separates lower-weight dossier matches from canonical ideas', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'Media Hash List');

    const research = page.getByRole('region', { name: 'Research matches' });
    await expect(research).toBeVisible();
    await expect(
      research.getByRole('link', { name: /Idea Mining Loop — 2026-08-08/ }).first(),
    ).toBeVisible();
    await expect(research).toContainText('Media Hash List');
  });

  test('surfaces the final experiment synthesis as research', async ({ page }) => {
    await page.goto('ideas');
    await search(page, 'experiment saturation');

    const research = page.getByRole('region', { name: 'Research matches' });
    await expect(research).toBeVisible();
    await expect(research.getByRole('link', { name: /Autonomous Research Synthesis/ })).toBeVisible();
    await expect(research).toContainText('experiment saturation');
  });
});

test.describe('filters and URL state', () => {
  test('combines validating and high-fit into the canonical thirteen', async ({ page }) => {
    await page.goto('ideas');

    await page.getByRole('checkbox', { name: /^Validating\b/ }).click();
    await expect(page.getByRole('checkbox', { name: /^Validating\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(15);
    await page.getByRole('checkbox', { name: /^High\b/ }).click();
    await expect(page.getByRole('checkbox', { name: /^High\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(13);
    await expect(page).toHaveURL(/status=validating/);
    await expect(page).toHaveURL(/fit=high/);

    await page.reload();
    await expect(page.getByRole('checkbox', { name: /^Validating\b/ })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: /^High\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(13);

    await page.getByRole('button', { name: 'Clear filters' }).click();
    await expect(page.locator('tbody tr')).toHaveCount(416);
  });

  test('ignores invalid filter values and still renders a stable ledger', async ({ page }) => {
    await page.goto('ideas?status=not-a-status&fit=impossible&tag=not-a-real-tag');

    await expect(page.locator('tbody tr')).toHaveCount(416);
    await expect(page.getByText('Every status included')).toBeVisible();
  });
});
