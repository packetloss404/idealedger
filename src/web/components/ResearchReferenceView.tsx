import { Link } from 'react-router-dom';

import type { IdeaRecord, ResearchReference } from '../types';
import { Icon } from '../ui/Icon';
import { MarkdownDocument } from './MarkdownDocument';

const qualityCopy = {
  heading: {
    label: 'Exact section match',
    description: 'This excerpt is anchored to a dossier heading reviewed by the generator.',
  },
  mention: {
    label: 'Mention found',
    description: 'The idea appears in this dossier, but the reference is not a verified standalone section.',
  },
  unmapped: {
    label: 'Reference not safely mapped',
    description: 'The database links this dossier, but no exact heading or dependable mention could be attached.',
  },
  none: {
    label: 'No linked research',
    description: 'Schema v1 contains no dossier reference. This does not prove that no evidence exists.',
  },
} as const;

export function ResearchReferenceView({
  idea,
  reference,
}: {
  idea: IdeaRecord;
  reference: ResearchReference;
}) {
  const copy = qualityCopy[reference.quality];
  const route = reference.document
    ? `${reference.document.route}?idea=${encodeURIComponent(idea.id)}${reference.anchor ? `#${reference.anchor}` : ''}`
    : undefined;

  return (
    <article className={`research-reference mapping-${reference.quality}`}>
      <header>
        <div>
          <span className="mapping-label">{copy.label}</span>
          <h3>{reference.document?.title ?? reference.sourcePath ?? 'No dossier reference'}</h3>
          <p>{copy.description}</p>
        </div>
        {route ? (
          <Link className="button button-secondary" to={route}>
            Open dossier <Icon name="arrow-left" className="source-arrow" />
          </Link>
        ) : null}
      </header>
      {reference.quality === 'heading' && reference.excerpt ? (
        <div className="research-excerpt">
          <MarkdownDocument markdown={reference.excerpt} />
        </div>
      ) : null}
      {reference.quality === 'mention' && reference.excerpt ? (
        <blockquote className="mention-excerpt">{reference.excerpt}</blockquote>
      ) : null}
    </article>
  );
}
