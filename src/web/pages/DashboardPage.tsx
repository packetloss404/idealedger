import { Link } from 'react-router-dom';

import {
  getIdea,
  getResearchReferences,
  getStatusCounts,
  ideas,
  sourceMeta,
  statusLabels,
} from '../ledger-adapter';
import { CompareToggle } from '../components/CompareToggle';
import { EmptyState } from '../components/EmptyState';
import { PageHeader } from '../components/PageHeader';
import { FitLabel, StatusLabel } from '../components/StatusLabels';
import { Icon } from '../ui/Icon';

function CandidateRow({ id, position }: { id: string; position: string }) {
  const idea = getIdea(id);
  if (!idea) return null;
  return (
    <article className="candidate-row">
      <div className="candidate-order">{position}</div>
      <div className="candidate-main">
        <div className="candidate-meta"><StatusLabel status={idea.status} /><FitLabel fit={idea.hackathon_fit} /></div>
        <h3><Link to={idea.route}>{idea.name}</Link></h3>
        <p>{idea.one_liner}</p>
      </div>
      <div className="candidate-decision">
        <span className="mini-label">Gate</span>
        <p>{idea.resurrection_trigger}</p>
      </div>
      <CompareToggle compact id={idea.id} name={idea.name} />
    </article>
  );
}

export function DashboardPage() {
  const crashTape = getIdea('crash-recoverable-field-recorder');
  const crashReference = crashTape ? getResearchReferences(crashTape).find((reference) => reference.quality === 'heading') : undefined;
  const counts = getStatusCounts();
  const noResearch = ideas.filter((idea) => !idea.dossierSlugs.length).length;

  return (
    <div className="page page-now">
      <PageHeader
        eyebrow={<><span className="eyebrow-dot" /> Research snapshot · {sourceMeta.updatedAt}</>}
        intro={<p>A frozen view of the Round-8 recommendation, two earlier shortlist lenses, and corpus gaps. This page does not infer an active test or live queue.</p>}
        title="What survived Round 8?"
      />

      {crashTape ? (
        <section className="recommendation" aria-labelledby="recommendation-heading">
          <div className="section-kicker">Frozen Round-8 recommendation</div>
          <div className="recommendation-layout">
            <div className="recommendation-main">
              <div className="candidate-meta"><StatusLabel status={crashTape.status} /><FitLabel fit={crashTape.hackathon_fit} /></div>
              <h2 id="recommendation-heading"><Link to={crashTape.route}>{crashTape.name}</Link></h2>
              <p className="recommendation-thesis">{crashTape.one_liner}</p>
              <p className="recommendation-reason">{crashTape.decision_reason}</p>
              <div className="recommendation-actions">
                <Link className="button button-primary" to={crashTape.route}>Review decision</Link>
                <CompareToggle id={crashTape.id} name={crashTape.name} />
              </div>
            </div>
            <aside className="gate-panel">
              <span className="gate-number">01</span>
              <div>
                <span className="mini-label">Round-8 gate before promotion</span>
                <p>{crashTape.resurrection_trigger}</p>
                {crashReference?.document ? (
                  <Link className="source-link" to={`/research/${crashReference.document.slug}${crashReference.anchor ? `#${crashReference.anchor}` : ''}`}>
                    Round 8 dossier <Icon name="arrow-left" className="source-arrow" />
                  </Link>
                ) : null}
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <EmptyState
          action={<Link className="button button-primary" to="/ideas?status=validating">Review validating ideas</Link>}
          description="Schema v1 does not contain a canonical current test, and no latest recommendation could be mapped safely."
          title="No active test is recorded"
        />
      )}

      <section className="shortlist-section" aria-labelledby="shortlist-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Frozen earlier-round shortlist</div>
            <h2 id="shortlist-heading">Different strengths, explicit gates</h2>
          </div>
          <Link className="text-link" to="/ideas?status=validating">View all validating ideas</Link>
        </div>
        <div className="candidate-list">
          <CandidateRow id="weed-check" position="Design / demo" />
          <CandidateRow id="lot-match" position="Narrow business" />
        </div>
      </section>

      <section className="review-inboxes" aria-labelledby="inboxes-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Review inboxes</div>
            <h2 id="inboxes-heading">Known work, not progress theater</h2>
          </div>
        </div>
        <div className="inbox-list">
          <Link to="/ideas?status=validating">
            <strong>{counts.validating}</strong>
            <span><b>Validating</b><small>Ideas with a survived thesis and explicit gate</small></span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/ideas?status=raw,needs_reconstruction">
            <strong>{counts.raw + counts.needs_reconstruction}</strong>
            <span><b>Unresolved</b><small>Raw ideas or concepts needing reconstruction</small></span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/ideas?research=none">
            <strong>{noResearch}</strong>
            <span><b>No linked research</b><small>The record exists; provenance does not</small></span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/ideas?status=passed_market,passed_scope&fit=high">
            <strong>{ideas.filter((idea) => ['passed_market', 'passed_scope'].includes(idea.status) && idea.hackathon_fit === 'high').length}</strong>
            <span><b>High-fit ideas we passed</b><small>Good demos with a decisive blocker</small></span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="snapshot-footer">
        <span>{ideas.length} ideas</span>
        <span>{statusLabels.passed_market}: {counts.passed_market}</span>
        <span>Schema v{sourceMeta.schemaVersion}</span>
        <span className="snapshot-hash" title={sourceMeta.hash}>{sourceMeta.hash.slice(7, 19)}</span>
      </footer>
    </div>
  );
}
