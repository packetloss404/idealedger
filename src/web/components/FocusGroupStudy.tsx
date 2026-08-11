import { Link } from 'react-router-dom';

import { getIdeaById } from '../../ledger';
import type { FocusGroupDisposition, FocusGroupStudy } from '../../ledger';
import { StatusLabel } from './StatusLabels';

const dispositionLabels: Record<FocusGroupDisposition, string> = {
  advanced: 'Advanced in study',
  bounded: 'Bounded follow-up',
  struck: 'Struck hypotheses',
};

export function FocusGroupMethodLabel({ study }: { study: FocusGroupStudy }) {
  const label = study.method === 'recruited_participants'
    ? 'Recruited participants'
    : 'Simulated personas';
  return <span className={`focus-method focus-method-${study.method}`}>{label}</span>;
}

export function FocusGroupStudyBody({ study }: { study: FocusGroupStudy }) {
  return (
    <>
      <aside className="focus-limitation" aria-label={`${study.title} evidence limitation`}>
        <span>Evidence boundary</span>
        <p>{study.limitation}</p>
      </aside>

      <section aria-labelledby={`${study.id}-segments`}>
        <div className="section-heading-row focus-section-heading">
          <div>
            <div className="section-kicker">Segment signal board</div>
            <h2 id={`${study.id}-segments`}>{study.segments.length} perspectives, with objections intact</h2>
          </div>
        </div>
        <div className="focus-segment-grid">
          {study.segments.map((segment) => (
            <article className="focus-segment" key={segment.id}>
              <h3>{segment.label}</h3>
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
            <h2 id={`${study.id}-outcomes`}>What this study changed</h2>
          </div>
        </div>
        <div className="focus-outcome-list">
          {study.outcomes.map((outcome) => (
            <article className={`focus-outcome focus-outcome-${outcome.disposition}`} key={outcome.label}>
              <span className="focus-outcome-label">{dispositionLabels[outcome.disposition]}</span>
              <h3>{outcome.label}</h3>
              <p>{outcome.summary}</p>
              {outcome.idea_ids.length ? (
                <div className="focus-idea-list" aria-label={`${outcome.label} linked ideas`}>
                  {outcome.idea_ids.map((ideaId) => {
                    const idea = getIdeaById(ideaId);
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
    </>
  );
}
