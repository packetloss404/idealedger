import { createElement, Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { resolveResearchHref } from '../ledger-adapter';
import type { ResearchHeading } from '../types';
import { Icon } from '../ui/Icon';

const inlinePatternSource = String.raw`(\[[^\]]+\]\([^)]+\)|\x60[^\x60]+\x60|\*\*[^*]+\*\*|\*[^*]+\*|<https?:\/\/[^>]+>|https?:\/\/[^\s<>()\[\]]+)`;

function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  const inlinePattern = new RegExp(inlinePatternSource, 'g');
  while ((match = inlinePattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const token = match[0];
    const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
    if (linkMatch) {
      const href = resolveResearchHref(linkMatch[2]);
      if (/^https?:\/\//i.test(href)) {
        nodes.push(
          <a href={href} key={`${match.index}-link`} rel="noreferrer" target="_blank">
            {linkMatch[1]}
            <Icon className="inline-icon" name="external" />
          </a>,
        );
      } else {
        nodes.push(
          <Link key={`${match.index}-link`} to={href}>
            {linkMatch[1]}
          </Link>,
        );
      }
    } else if (token.startsWith('`')) {
      nodes.push(<code key={`${match.index}-code`}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith('**')) {
      nodes.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*')) {
      nodes.push(<em key={`${match.index}-em`}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith('<http')) {
      const href = token.slice(1, -1);
      nodes.push(
        <a href={href} key={`${match.index}-url`} rel="noreferrer" target="_blank">
          {href}
          <Icon className="inline-icon" name="external" />
        </a>,
      );
    } else if (token.startsWith('http')) {
      const suffix = /[.,;:!?]+$/.exec(token)?.[0] ?? '';
      const href = suffix ? token.slice(0, -suffix.length) : token;
      nodes.push(
        <a href={href} key={`${match.index}-bare-url`} rel="noreferrer" target="_blank">
          {href}
          <Icon className="inline-icon" name="external" />
        </a>,
      );
      if (suffix) nodes.push(suffix);
    }
    cursor = match.index + token.length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>)}</>;
}

function isBlockStart(line: string, nextLine?: string): boolean {
  const trimmed = line.trim();
  return (
    !trimmed ||
    /^#{1,6}\s+/.test(trimmed) ||
    /^```/.test(trimmed) ||
    /^>\s?/.test(trimmed) ||
    /^[-*+]\s+/.test(trimmed) ||
    /^\d+\.\s+/.test(trimmed) ||
    /^([-*_])\1{2,}$/.test(trimmed) ||
    (Boolean(nextLine) && trimmed.includes('|') && /^\s*\|?\s*:?-{3,}/.test(nextLine ?? ''))
  );
}

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

export function MarkdownDocument({
  headings = [],
  markdown,
  skipFirstHeading = false,
}: {
  headings?: ResearchHeading[];
  markdown: string;
  skipFirstHeading?: boolean;
}) {
  const lines = markdown.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;
  let headingIndex = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();
    if (!trimmed) {
      index += 1;
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const known = headings[headingIndex];
      const anchor = known?.anchor ?? headingMatch[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const shouldSkip = skipFirstHeading && headingIndex === 0 && level === 1;
      headingIndex += 1;
      if (shouldSkip) {
        index += 1;
        continue;
      }
      const headingTag = `h${Math.min(6, Math.max(1, level))}`;
      blocks.push(createElement(headingTag, { id: anchor, key: `heading-${index}`, tabIndex: -1 }, <Inline text={headingMatch[2]} />));
      index += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const language = trimmed.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <pre key={`code-${index}`}>
          <code data-language={language || undefined}>{code.join('\n')}</code>
        </pre>,
      );
      continue;
    }

    if (trimmed.includes('|') && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1] ?? '')) {
      const headers = splitTableRow(trimmed);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes('|')) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      blocks.push(
        <div className="markdown-table-wrap" key={`table-${index}`} tabIndex={0}>
          <table>
            <thead>
              <tr>{headers.map((header, cell) => <th key={cell}><Inline text={header} /></th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => <td key={cellIndex}><Inline text={cell} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quote.push(lines[index].trim().replace(/^>\s?/, ''));
        index += 1;
      }
      blocks.push(<blockquote key={`quote-${index}`}><Inline text={quote.join(' ')} /></blockquote>);
      continue;
    }

    const unordered = /^[-*+]\s+/.test(trimmed);
    const ordered = /^\d+\.\s+/.test(trimmed);
    if (unordered || ordered) {
      const items: string[] = [];
      const pattern = unordered ? /^[-*+]\s+/ : /^\d+\.\s+/;
      while (index < lines.length && pattern.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(pattern, ''));
        index += 1;
      }
      const List = ordered ? 'ol' : 'ul';
      blocks.push(
        <List key={`list-${index}`}>
          {items.map((item, itemIndex) => <li key={itemIndex}><Inline text={item} /></li>)}
        </List>,
      );
      continue;
    }

    if (/^([-*_])\1{2,}$/.test(trimmed)) {
      blocks.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    const paragraph = [trimmed];
    index += 1;
    while (index < lines.length && !isBlockStart(lines[index], lines[index + 1])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`paragraph-${index}`}><Inline text={paragraph.join(' ')} /></p>);
  }

  return <article className="markdown-document">{blocks}</article>;
}
