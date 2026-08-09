import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import type { ResearchRepository } from '../../ledger';
import {
  getIdea,
  getResearchReferences,
  loadResearchRepository,
  sourceMeta,
} from '../ledger-adapter';
import { CompareToggle } from '../components/CompareToggle';
import { DecisionTriptych } from '../components/DecisionTriptych';
import { EmptyState } from '../components/EmptyState';
import { FitLabel, StatusLabel } from '../components/StatusLabels';
import { ResearchReferenceView } from '../components/ResearchReferenceView';
import { Icon } from '../ui/Icon';

export function IdeaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const idea = getIdea(id);
  const [researchState, setResearchState] = useState<{
    error?: boolean;
    ideaId: string;
    repository?: ResearchRepository;
  }>({ ideaId: '' });

  useEffect(() => {
    if (!idea?.dossierSlugs.length) return;
    let current = true;
    loadResearchRepository().then(
      (repository) => {
        if (current) setResearchState({ ideaId: idea.id, repository });
      },
      () => {
        if (current) setResearchState({ error: true, ideaId: idea.id });
      },
    );
    return () => {
      current = false;
    };
  }, [idea]);
  if (!idea) {
    return (
      <div className="page page-not-found">
        <EmptyState
          action={<Link className="button button-primary" to="/ideas">Search the ledger</Link>}
          description={<>No canonical idea has the ID <code>{id}</code>. The route may be stale or mistyped.</>}
          headingLevel={1}
          title="Idea not found"
        />
      </div>
    );
  }

  const activeResearch = researchState.ideaId === idea.id ? researchState : undefined;
  const references = getResearchReferences(idea, activeResearch?.repository);
  return (
    <div className="page page-detail">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link to="/ideas"><Icon name="arrow-left" /> All ideas</Link>
      </nav>

      <header className="idea-detail-header">
        <div className="idea-detail-title">
          <div className="candidate-meta"><StatusLabel status={idea.status} /><FitLabel fit={idea.hackathon_fit} /></div>
          <h1 tabIndex={-1}>{idea.name}</h1>
          {idea.aliases.length ? <p className="aliases">Also explored as {idea.aliases.join(' · ')}</p> : null}
        </div>
        <CompareToggle id={idea.id} name={idea.name} />
      </header>

      <DecisionTriptych idea={idea} />

      <div className="detail-layout">
        <div className="detail-document">
          <section className="detail-research" aria-labelledby="detail-research-heading">
            <div className="section-heading-row">
              <div>
                <div className="section-kicker">Provenance</div>
                <h2 id="detail-research-heading">Research record</h2>
              </div>
            </div>
            <div className="reference-list">
              {references.map((reference, index) => (
                <ResearchReferenceView idea={idea} key={`${reference.slug ?? 'none'}-${index}`} reference={reference} />
              ))}
            </div>
            {activeResearch?.error ? (
              <div className="inline-warning" role="status">
                Dossier excerpts could not be loaded. Provenance labels and source routes remain available.
              </div>
            ) : null}
          </section>
        </div>

        <aside className="detail-sidebar" aria-label="Idea metadata">
          <section>
            <span className="mini-label">Canonical ID</span>
            <code>{idea.id}</code>
          </section>
          <section>
            <span className="mini-label">Tags</span>
            <div className="tag-list">
              {idea.tags.map((tag) => <Link key={tag} to={`/ideas?tag=${encodeURIComponent(tag)}`}>{tag}</Link>)}
            </div>
          </section>
          <section>
            <span className="mini-label">Dossier references</span>
            <strong>{idea.dossierSlugs.length}</strong>
            <small>Reference count is provenance, not evidence strength.</small>
          </section>
          <section>
            <span className="mini-label">Snapshot</span>
            <span>{sourceMeta.updatedAt}</span>
            <small>Schema v{sourceMeta.schemaVersion} · read only</small>
          </section>
        </aside>
      </div>
    </div>
  );
}
