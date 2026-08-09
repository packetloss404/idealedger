import { describe, expect, it } from 'vitest';

import {
  parseCompareIds,
  parseLedgerSearchParams,
  routerBasename,
  serializeCompareIds,
  serializeLedgerSearchParams,
} from './index';

describe('ledger URL state', () => {
  it('normalizes Vite public bases for React Router', () => {
    expect(routerBasename('/')).toBe('/');
    expect(routerBasename('./')).toBe('/');
    expect(routerBasename('/idea-ledger/')).toBe('/idea-ledger');
  });

  it('parses repeated and comma-delimited facets while dropping unknown values', () => {
    expect(
      parseLedgerSearchParams(
        '?q=card+custody&status=validating,raw&status=invalid&fit=high&research=heading&tag=mobile&tag=not-a-real-tag&sort=name',
      ),
    ).toEqual({
      query: 'card custody',
      sort: 'name',
      statuses: ['validating', 'raw'],
      hackathonFits: ['high'],
      researchMappings: ['heading'],
      tags: ['mobile'],
    });
  });

  it('serializes a canonical, stable query string', () => {
    const params = serializeLedgerSearchParams({
      query: '  crash tape  ',
      statuses: ['validating', 'raw', 'validating'],
      hackathonFits: ['high'],
      researchMappings: ['heading'],
      tags: ['mobile', 'not-a-real-tag'],
      sort: 'relevance',
    });
    expect(params.toString()).toBe(
      'q=crash+tape&status=raw&status=validating&fit=high&research=heading&tag=mobile',
    );
  });

  it('round-trips compare IDs, deduplicates them, and caps the tray at four', () => {
    const ids = [
      'lot-match',
      'weed-check',
      'lot-match',
      'crash-recoverable-field-recorder',
      'event-coverage-extension-ack',
      'afterglow',
    ];
    const params = serializeCompareIds(ids);
    expect(params.toString()).toBe(
      'ids=lot-match%2Cweed-check%2Ccrash-recoverable-field-recorder%2Cevent-coverage-extension-ack',
    );
    expect(parseCompareIds(params)).toEqual([
      'lot-match',
      'weed-check',
      'crash-recoverable-field-recorder',
      'event-coverage-extension-ack',
    ]);
    expect(parseCompareIds('?ids=unknown,lot-match')).toEqual(['lot-match']);
    expect(parseCompareIds(`?ids=${ids.join(',')}`, 100)).toHaveLength(4);
    expect(serializeCompareIds(ids, 100).get('ids')?.split(',')).toHaveLength(4);
  });

  it('drops invalid-only facets rather than producing an impossible filter state', () => {
    expect(
      parseLedgerSearchParams(
        '?status=invalid&fit=excellent&research=almost&tag=not-a-real-tag&sort=recent',
      ),
    ).toEqual({
      query: '',
      sort: 'relevance',
      statuses: [],
      hackathonFits: [],
      researchMappings: [],
      tags: [],
    });
  });
});
