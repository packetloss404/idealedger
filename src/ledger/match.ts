import { queryTokens } from './normalize';

export function relationScore(
  value: string,
  query: string,
  tokens: readonly string[],
): number {
  if (!value) return 0;
  const words = value.split(' ');
  let score = 0;
  if (value === query) score += 12;
  else if (value.startsWith(`${query} `) || value.startsWith(query)) score += 8;
  else if (value.includes(query)) score += 5;

  for (const token of tokens) {
    if (words.includes(token)) score += 3;
    else if (words.some((word) => word.startsWith(token))) score += 2;
    else if (value.includes(token)) score += 1;
  }
  return score;
}

export function containsToken(value: string, token: string): boolean {
  if (value.includes(token)) return true;
  return value.split(' ').some((word) => word.startsWith(token));
}

function phrasePattern(tokens: readonly string[]): RegExp | undefined {
  if (!tokens.length) return undefined;
  const escaped = tokens.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(escaped.join('[^a-z0-9]+'), 'i');
}

export function createSearchSnippet(
  value: string,
  query: string,
): { matchedText: string; text: string } {
  const plain = value.replace(/\s+/g, ' ').trim();
  const tokens = queryTokens(query);
  const match = phrasePattern(tokens)?.exec(plain);
  const fallbackToken = tokens[0] ?? '';
  const fallbackIndex = fallbackToken ? plain.toLowerCase().indexOf(fallbackToken) : -1;
  const found = match?.index ?? fallbackIndex;
  const matchedText =
    match?.[0] ??
    (fallbackIndex >= 0 ? plain.slice(fallbackIndex, fallbackIndex + fallbackToken.length) : '');
  const start = Math.max(0, found < 0 ? 0 : found - 70);
  const excerpt = plain.slice(start, start + 240);
  return {
    matchedText,
    text: `${start > 0 ? '…' : ''}${excerpt}${start + 240 < plain.length ? '…' : ''}`,
  };
}
