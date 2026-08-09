import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

import type { ResearchDocument } from '../../ledger';
import {
  getIdea,
  getResearchMetadata,
  loadResearchRepository,
} from '../ledger-adapter';
import { EmptyState } from '../components/EmptyState';
import { MarkdownDocument } from '../components/MarkdownDocument';
import { Icon } from '../ui/Icon';

function safeHashId(hash: string): string {
  const value = hash.startsWith('#') ? hash.slice(1) : hash;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function ResearchPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const metadata = getResearchMetadata(slug);
  const linkedIdea = getIdea(searchParams.get('idea') ?? undefined);
  const [researchState, setResearchState] = useState<{
    document?: ResearchDocument;
    error?: boolean;
    slug: string;
  }>({ slug: '' });

  useEffect(() => {
    if (!metadata) return;
    let current = true;
    loadResearchRepository().then(
      (repository) => {
        if (!current) return;
        const document = repository.getBySlug(metadata.slug);
        setResearchState(document
          ? { document, slug: metadata.slug }
          : { error: true, slug: metadata.slug });
      },
      () => {
        if (current) setResearchState({ error: true, slug: metadata.slug });
      },
    );
    return () => {
      current = false;
    };
  }, [metadata]);

  const researchRecord = researchState.slug === metadata?.slug
    ? researchState.document
    : undefined;

  useEffect(() => {
    if (!location.hash || !metadata) return;
    const id = safeHashId(location.hash);
    const frame = requestAnimationFrame(() => {
      const target = globalThis.document.getElementById(id);
      target?.scrollIntoView({ block: 'start' });
      if (target instanceof HTMLElement) target.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, metadata, researchRecord]);

  if (!metadata) {
    return (
      <div className="page page-not-found">
        <EmptyState
          action={<Link className="button button-primary" to="/ideas">Return to the ledger</Link>}
          description={<>No generated dossier has the slug <code>{slug}</code>.</>}
          headingLevel={1}
          title="Dossier not found"
        />
      </div>
    );
  }

  const titleAnchor = metadata.headings.find((heading) => heading.depth === 1)?.anchor;
  const activeState = researchState.slug === metadata.slug ? researchState : undefined;
  const outboundReferences = researchRecord?.links.filter((link) => link.kind === 'external').length;

  return (
    <div className="page page-research">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link to={linkedIdea?.route ?? '/ideas'}><Icon name="arrow-left" /> {linkedIdea ? linkedIdea.name : 'All ideas'}</Link>
      </nav>
      <div className="research-layout">
        <div className="research-document-column">
          <header className="research-header">
            <div className="section-kicker">Research dossier · read only</div>
            <h1 id={titleAnchor} tabIndex={-1}>{metadata.title}</h1>
            <p>
              {metadata.linkedIdeaIds.length} linked {metadata.linkedIdeaIds.length === 1 ? 'idea' : 'ideas'}
              {' · '}
              {outboundReferences === undefined ? 'loading source links' : `${outboundReferences} outbound references`}
            </p>
            {linkedIdea ? (
              <div className="context-banner">
                Opened from <Link to={linkedIdea.route}>{linkedIdea.name}</Link>. The full dossier may cover many other ideas.
              </div>
            ) : null}
          </header>
          {researchRecord ? (
            <MarkdownDocument headings={researchRecord.headings} markdown={researchRecord.markdown} skipFirstHeading />
          ) : activeState?.error ? (
            <div className="inline-warning research-load-state" role="alert">
              This dossier could not be loaded. Its generated route and provenance metadata are still valid.
            </div>
          ) : (
            <div className="research-load-state" role="status">Loading dossier text…</div>
          )}
        </div>

        <aside className="research-toc" aria-label="On this page">
          <span className="mini-label">On this page</span>
          <nav>
            {metadata.headings.filter((heading) => heading.depth <= 3).map((heading) => (
              <a className={`toc-depth-${heading.depth}`} href={`#${heading.anchor}`} key={heading.anchor}>{heading.text}</a>
            ))}
          </nav>
          <div className="toc-related">
            <span className="mini-label">Linked ideas</span>
            {metadata.linkedIdeaIds.slice(0, 8).map((id) => {
              const idea = getIdea(id);
              return idea ? <Link key={id} to={idea.route}>{idea.name}</Link> : null;
            })}
            {metadata.linkedIdeaIds.length > 8 ? <small>+{metadata.linkedIdeaIds.length - 8} more in the ledger</small> : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
