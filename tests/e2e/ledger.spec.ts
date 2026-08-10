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
    await expect(page.locator('tbody tr')).toHaveCount(173);
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
});

test.describe('filters and URL state', () => {
  test('combines validating and high-fit into the canonical six', async ({ page }) => {
    await page.goto('ideas');

    await page.getByRole('checkbox', { name: /^Validating\b/ }).click();
    await expect(page.getByRole('checkbox', { name: /^Validating\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(8);
    await page.getByRole('checkbox', { name: /^High\b/ }).click();
    await expect(page.getByRole('checkbox', { name: /^High\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(6);
    await expect(page).toHaveURL(/status=validating/);
    await expect(page).toHaveURL(/fit=high/);

    await page.reload();
    await expect(page.getByRole('checkbox', { name: /^Validating\b/ })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: /^High\b/ })).toBeChecked();
    await expect(page.locator('tbody tr')).toHaveCount(6);

    await page.getByRole('button', { name: 'Clear filters' }).click();
    await expect(page.locator('tbody tr')).toHaveCount(173);
  });

  test('ignores invalid filter values and still renders a stable ledger', async ({ page }) => {
    await page.goto('ideas?status=not-a-status&fit=impossible&tag=not-a-real-tag');

    await expect(page.locator('tbody tr')).toHaveCount(173);
    await expect(page.getByText('Every status included')).toBeVisible();
  });
});
