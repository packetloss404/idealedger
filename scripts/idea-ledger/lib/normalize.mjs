import path from 'node:path';

export function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

export function normalizeSearch(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function dossierSlug(relativePath) {
  return path.posix
    .basename(toPosixPath(relativePath), '.md')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function normalizeLineEndings(value) {
  return value.replace(/\r\n?/g, '\n');
}
