import { expect, test as base } from '@playwright/test';

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

test('supports skip navigation and the slash search shortcut', async ({ browserName, page }) => {
  await page.goto('ideas');

  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await page.keyboard.press('Tab');
  // Headless WebKit on Windows follows Safari's "Press Tab to highlight each item"
  // preference, which is disabled in this runner. Focus the same keyboard target
  // directly so the cross-engine smoke still exercises its focus state.
  if (browserName === 'webkit' && !(await skipLink.evaluate((element) => element === document.activeElement))) {
    await skipLink.focus();
  }
  await expect(skipLink).toBeFocused();

  await page.keyboard.press('Escape');
  await page.keyboard.press('/');
  const search = page.getByRole('searchbox', {
    name: 'Search ideas, decisions, and resurrection conditions',
  });
  await expect(search).toBeFocused();
  await search.fill('Lot Lock');
  await search.press('Enter');
  await expect(page.locator('tr[data-idea-id="lot-match"]')).toBeVisible();
});

test('uses a keyboard-dismissible filter sheet on mobile without page overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('ideas');

  await expect.poll(() =>
    page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
  ).toBe(true);

  const filters = page.getByRole('button', { name: /^Filters/ });
  const panel = page.locator('.filter-panel');
  await expect(filters).toBeVisible();
  await expect.poll(async () => {
    if ((await panel.count()) === 0) return true;
    return panel.evaluate((element) => {
      if (element.hasAttribute('hidden')) return true;
      if (element.hasAttribute('inert')) return true;
      const focusable = element.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, [tabindex]',
      );
      return (
        element.getAttribute('aria-hidden') === 'true' &&
        [...focusable].every((control) => control.tabIndex < 0 || 'disabled' in control && control.disabled)
      );
    });
  }, 'a closed mobile filter sheet must not expose offscreen tab stops').toBe(true);

  await filters.click();
  await expect(filters).toHaveAttribute('aria-expanded', 'true');
  await expect(panel).toBeVisible();
  const firstFilter = panel.getByRole('checkbox', { name: /^Validating\b/ });
  await firstFilter.focus();
  await expect(firstFilter).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(filters).toHaveAttribute('aria-expanded', 'false');
  await expect(filters).toBeFocused();
  await expect.poll(async () => {
    if ((await panel.count()) === 0) return true;
    return panel.evaluate(
      (element) => element.hasAttribute('hidden') || element.hasAttribute('inert'),
    );
  }, 'closing the filter sheet must remove it from keyboard navigation').toBe(true);
});

test('exposes exactly one main landmark on detail and dossier routes', async ({ page }) => {
  await page.goto('ideas/lot-match');
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.getByRole('main')).toContainText('LotMatch');

  await page.goto('research/idea-mining-loop-2026-08-09');
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.getByRole('main')).toContainText('Idea Mining Loop — 2026-08-09');
});

test('keeps the focus-group room usable in the four-item mobile navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('focus-groups');

  await expect(page.getByRole('heading', { level: 1, name: 'Focus groups' })).toBeVisible();
  const mobileNavigation = page.locator('.mobile-navigation').getByRole('navigation', {
    name: 'Primary',
  });
  await expect(mobileNavigation.getByRole('link')).toHaveCount(4);
  await expect(mobileNavigation.getByRole('link', { name: /Focus groups/ })).toHaveAttribute(
    'aria-current',
    'page',
  );
  await expect(page.getByRole('heading', { level: 2, name: 'Every group, broken out and addressable' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open study room' })).toHaveCount(2);
  await expect.poll(() =>
    page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
  ).toBe(true);
  await expect(page.getByText('Eight research-derived persona composites')).toBeVisible();
});

test('enforces the two-item mobile comparison limit', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('ideas');

  const firstRow = page.locator('tr[data-idea-id="crash-recoverable-field-recorder"]');
  const secondRow = page.locator('tr[data-idea-id="weed-check"]');
  const thirdRow = page.locator('tr[data-idea-id="lot-match"]');
  const first = firstRow.locator('input[type="checkbox"]');
  const second = secondRow.locator('input[type="checkbox"]');
  const third = thirdRow.locator('input[type="checkbox"]');
  const activateToggle = async (row: typeof firstRow) => {
    const checkbox = row.locator('input[type="checkbox"]');
    await checkbox.focus();
    await checkbox.press('Space');
  };
  await activateToggle(firstRow);
  await activateToggle(secondRow);
  await activateToggle(thirdRow);

  await expect(first).toBeChecked();
  await expect(second).toBeChecked();
  await expect(third).not.toBeChecked();
  await expect(page.getByText('Comparison limit reached.')).toBeAttached();
  await expect(page.getByRole('complementary', { name: 'Comparison tray' })).toContainText('2 selected');
});
