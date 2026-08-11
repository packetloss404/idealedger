import { Link } from 'react-router-dom';

import {
  getStatusCounts,
  focusGroupStudies,
  ideas,
  mappingOptions,
  researchMetadata,
  sourceMeta,
} from '../ledger-adapter';
import { PageHeader } from '../components/PageHeader';

interface DatabaseLensProps {
  count: number;
  description: string;
  label: string;
  to: string;
}

function DatabaseLens({ count, description, label, to }: DatabaseLensProps) {
  return (
    <Link to={to}>
      <strong>{count}</strong>
      <span><b>{label}</b><small>{description}</small></span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function DashboardPage() {
  const counts = getStatusCounts();
  const unresolved = counts.raw + counts.needs_reconstruction;
  const passed = counts.passed_market + counts.passed_scope;
  const noResearch = ideas.filter((idea) => !idea.dossierSlugs.length).length;
  const linkedResearch = ideas.length - noResearch;
  const exactSections = mappingOptions.find(({ value }) => value === 'heading')?.count ?? 0;
  const researchEdges = ideas.reduce((total, idea) => total + idea.dossierSlugs.length, 0);

  return (
    <div className="page page-now">
      <PageHeader
        eyebrow={<><span className="eyebrow-dot" /> Living decision archive · {sourceMeta.updatedAt}</>}
        intro={<p>A durable record of every idea we explore—what it is, why it moved forward or died, and what evidence would change the decision. Search first, then use the archive to choose the next question.</p>}
        title="The idea database"
      />

      <section className="recommendation database-overview" aria-labelledby="database-overview-heading">
        <div className="section-kicker">How this database works</div>
        <div className="recommendation-layout">
          <div className="recommendation-main">
            <h2 id="database-overview-heading">Conversation creates the work. The ledger keeps the memory.</h2>
            <p className="recommendation-thesis">We brainstorm and make judgments together in chat. The database preserves the resulting ideas, evidence, decisions, and reopening conditions so the next conversation starts further ahead.</p>
            <p className="recommendation-reason">Every status remains searchable, including ideas we passed. Nothing becomes a winner because it is recent, and nothing disappears merely because it failed.</p>
            <div className="recommendation-actions">
              <Link className="button button-primary" to="/ideas">Browse all {ideas.length} ideas</Link>
              <Link className="button button-secondary" to="/ideas?status=validating">Review validating ideas</Link>
            </div>
          </div>
          <aside className="gate-panel workflow-panel" aria-label="Working loop">
            <span className="gate-number">01</span>
            <div>
              <span className="mini-label">Working loop</span>
              <ol className="workflow-list">
                <li><b>Brainstorm</b><span>Explore the idea together in chat.</span></li>
                <li><b>Research</b><span>Fan out focused evidence and adversarial checks.</span></li>
                <li><b>Decide</b><span>Choose the status and the next falsification gate.</span></li>
                <li><b>Record</b><span>Update the database, dossier, and searchable Ledger.</span></li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="review-inboxes" aria-labelledby="status-lenses-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Browse the whole database</div>
            <h2 id="status-lenses-heading">Every decision stays visible</h2>
          </div>
          <Link className="text-link" to="/ideas">Open the full ledger</Link>
        </div>
        <div className="inbox-list">
          <DatabaseLens count={ideas.length} description="The complete searchable decision archive" label="All ideas" to="/ideas" />
          <DatabaseLens count={counts.validating} description="Ideas with a surviving thesis and explicit gate" label="Validating" to="/ideas?status=validating" />
          <DatabaseLens count={counts.parked} description="Ideas waiting for a named condition to change" label="Parked" to="/ideas?status=parked" />
          <DatabaseLens count={unresolved} description="Raw concepts or records needing reconstruction" label="Unresolved" to="/ideas?status=raw,needs_reconstruction" />
          <DatabaseLens count={passed} description="Decisions preserved so we do not repeat the work" label="Passed decisions" to="/ideas?status=passed_market,passed_scope" />
          <DatabaseLens count={noResearch} description="Records that still need a defensible source trail" label="No linked research" to="/ideas?research=none" />
        </div>
      </section>

      <section className="review-inboxes" aria-labelledby="research-coverage-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Research coverage</div>
            <h2 id="research-coverage-heading">What the archive can currently defend</h2>
          </div>
        </div>
        <div className="inbox-list database-health-list">
          <DatabaseLens count={linkedResearch} description="Records connected to at least one dossier" label="Ideas with research" to="/ideas?research=heading,mention,unmapped" />
          <DatabaseLens count={exactSections} description="Ideas mapped to a precise dossier heading" label="Exact section mappings" to="/ideas?research=heading" />
          <DatabaseLens count={researchMetadata.length} description={`${researchEdges} idea-to-dossier links across the archive`} label="Research dossiers" to="/ideas?research=heading,mention,unmapped" />
          <DatabaseLens count={focusGroupStudies.length} description="Method-labeled segment signals, objections, and decision impact" label="Focus-group studies" to="/focus-groups" />
          <DatabaseLens count={noResearch} description="The clearest provenance cleanup queue" label="Coverage gaps" to="/ideas?research=none" />
        </div>
      </section>

      <section className="review-inboxes" aria-labelledby="latest-round-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Latest completed research round</div>
            <h2 id="latest-round-heading">Round 11 ended with an experiment, not a build</h2>
          </div>
          <Link className="text-link" to="/research/shipaton-mclovin-round-11-2026-08-10">Read the full dossier</Link>
        </div>
        <div className="inbox-list database-health-list">
          <DatabaseLens count={30} description="Independent synthetic rooms spanning home, work, care, markets, and developers" label="Domain panels" to="/focus-groups" />
          <DatabaseLens count={153} description="Raw concepts narrowed through duplicate, authority, competitor, and payment gates" label="Concepts screened" to="/research/shipaton-mclovin-round-11-2026-08-10" />
          <DatabaseLens count={1} description="LotMatch remains validate-first; no production build was approved" label="Finalist" to="/ideas/lot-match" />
        </div>
      </section>

      <footer className="snapshot-footer">
        <span>{ideas.length} ideas</span>
        <span>{passed} preserved pass decisions</span>
        <span>{researchMetadata.length} dossiers</span>
        <span>Schema v{sourceMeta.schemaVersion}</span>
        <span className="snapshot-hash" title={sourceMeta.hash}>{sourceMeta.hash.slice(7, 19)}</span>
      </footer>
    </div>
  );
}
