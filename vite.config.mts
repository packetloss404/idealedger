import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

function normalizeBasePath(value: string): string {
  const trimmed = value.trim();
  if (trimmed === '' || trimmed === '/') return '/';
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}/`;
}

function githubPagesBase(): string {
  if (process.env.VITE_BASE_PATH) return normalizeBasePath(process.env.VITE_BASE_PATH);
  if (process.env.GITHUB_ACTIONS !== 'true' || !process.env.GITHUB_REPOSITORY) return '/';

  const [owner, repository] = process.env.GITHUB_REPOSITORY.split('/');
  if (!owner || !repository) return '/';
  return repository.toLowerCase() === `${owner.toLowerCase()}.github.io`
    ? '/'
    : normalizeBasePath(repository);
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/ledger/**/*.test.ts'],
  },
});
