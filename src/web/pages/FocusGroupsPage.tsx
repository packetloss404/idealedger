import { Link } from 'react-router-dom';

import type { FocusGroupDisposition, FocusGroupStudy } from '../../ledger';
import { PageHeader } from '../components/PageHeader';
import { StatusLabel } from '../components/StatusLabels';
import {
  focusGroupCounts,
  focusGroupStudies,
  focusGroupsUpdatedAt,
  getIdea,
} from '../ledger-adapter';

const dispositionLabels: Record<FocusGroupDisposition, string> = {
  advanced: 'Advanced in study',
  bounded: 'Bounded follow-up',
  struck: 'Struck hypotheses',
};

function MethodLabel({ study }: { study: FocusGroupStudy }) {
  const label = study.method === 'recruited_participants'
    ? 'Recruited participants'
    : 'Simulated personas';
  return <span className={`focus-method focus-method-${study.method}`}>{label}</span>;
}

function StudyIndex({ study, number }: { number: number; study: FocusGroupStudy }) {
  return (
    <a className="focus-study-index" href={`#${study.id}`}>
      <span className="focus-study-number">{String(number).padStart(2, '0')}</span>
      <span>
        <b>{study.title}</b>
        <small>{study.sample_label}</small>
      </span>
      <span aria-hidden="true">↓</span>
    </a>
  );
}

function StudySection({ study, number }: { number: number; study: FocusGroupStudy }) {
  return (
    <article className="focus-study" id={study.id}>
      <header className="focus-study-header">
        <div>
          <div className="focus-study-meta">
            <span className="focus-study-number">Study {String(number).padStart(2, '0')}</span>
            <MethodLabel study={study} />
            <time dateTime={study.conducted_at}>{study.conducted_at}</time>
          </div>
          <h2>{study.title}</h2>
          <p>{study.summary}</p>
        </div>
        <Link className="button button-secondary" to={study.dossierRoute}>Read source dossier</Link>
      </header>

      <aside className="focus-limitation" aria-label={`${study.title} evidence limitation`}>
        <span>Evidence boundary</span>
        <p>{study.limitation}</p>
      </aside>

      <section aria-labelledby={`${study.id}-segments`}>
        <div className="section-heading-row focus-section-heading">
          <div>
            <div className="section-kicker">Segment signal board</div>
            <h3 id={`${study.id}-segments`}>{study.segments.length} perspectives, with objections intact</h3>
          </div>
        </div>
        <div className="focus-segment-grid">
          {study.segments.map((segment) => (
            <article className="focus-segment" key={segment.id}>
              <h4>{segment.label}</h4>
              <dl>
                <div>
                  <dt>Primary job</dt>
                  <dd>{segment.primary_job}</dd>
                </div>
                <div>
                  <dt>Signal</dt>
                  <dd>{segment.signal}</dd>
                </div>
                <div>
                  <dt>Main objection</dt>
                  <dd>{segment.objection}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="focus-outcomes" aria-labelledby={`${study.id}-outcomes`}>
        <div className="section-heading-row focus-section-heading">
          <div>
            <div className="section-kicker">Decision impact</div>
            <h3 id={`${study.id}-outcomes`}>What this study changed</h3>
          </div>
        </div>
        <div className="focus-outcome-list">
          {study.outcomes.map((outcome) => (
            <article className={`focus-outcome focus-outcome-${outcome.disposition}`} key={outcome.label}>
              <span className="focus-outcome-label">{dispositionLabels[outcome.disposition]}</span>
              <h4>{outcome.label}</h4>
              <p>{outcome.summary}</p>
              {outcome.idea_ids.length ? (
                <div className="focus-idea-list" aria-label={`${outcome.label} linked ideas`}>
                  {outcome.idea_ids.map((ideaId) => {
                    const idea = getIdea(ideaId);
                    if (!idea) return null;
                    return (
                      <Link className="focus-idea" key={idea.id} to={idea.route}>
                        <span>{idea.name}</span>
                        <StatusLabel status={idea.status} />
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <footer className="focus-next-step">
        <span>Next real research</span>
        <p>{study.next_step}</p>
      </footer>
    </article>
  );
}

export function FocusGroupsPage() {
  return (
    <div className="page page-focus-groups">
      <PageHeader
        eyebrow={<><span className="eyebrow-dot" /> Research room · updated {focusGroupsUpdatedAt}</>}
        intro={<p>Review who a concept is hypothesized to serve, what reaction the research predicts, what objection could kill it, and whether that signal came from simulated synthesis or recruited people.</p>}
        title="Focus groups"
      />

      <section className="focus-boundary" aria-labelledby="focus-boundary-heading">
        <div>
          <div className="section-kicker">Evidence integrity</div>
          <h2 id="focus-boundary-heading">A hypothesis lab, not a wall of fake customer quotes.</h2>
          <p>Every study declares its method. Simulated personas can expose blind spots and prioritize recruitment; only recruited behavior, payment, and attributable evidence can validate demand.</p>
        </div>
        <dl className="focus-stats">
          <div><dt>{focusGroupCounts.studies}</dt><dd>Structured studies</dd></div>
          <div><dt>{focusGroupCounts.segments}</dt><dd>Segment perspectives</dd></div>
          <div><dt>{focusGroupCounts.recruitedStudies}</dt><dd>Recruited studies</dd></div>
          <div><dt>{focusGroupCounts.linkedIdeas}</dt><dd>Canonical ideas linked</dd></div>
        </dl>
      </section>

      <nav className="focus-study-index-list" aria-label="Focus-group studies">
        {focusGroupStudies.map((study, index) => (
          <StudyIndex key={study.id} number={index + 1} study={study} />
        ))}
      </nav>

      <div className="focus-study-list">
        {focusGroupStudies.map((study, index) => (
          <StudySection key={study.id} number={index + 1} study={study} />
        ))}
      </div>
    </div>
  );
}
