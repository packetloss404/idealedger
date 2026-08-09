import type { IdeaRecord } from '../types';

export function DecisionTriptych({ idea }: { idea: IdeaRecord }) {
  return (
    <section className="decision-triptych" aria-label="Decision summary">
      <article>
        <span className="triptych-number">01</span>
        <div>
          <h2>Promise</h2>
          <p>{idea.one_liner}</p>
        </div>
      </article>
      <article>
        <span className="triptych-number">02</span>
        <div>
          <h2>Why this status</h2>
          <p>{idea.decision_reason}</p>
        </div>
      </article>
      <article>
        <span className="triptych-number">03</span>
        <div>
          <h2>What changes the decision</h2>
          <p>{idea.resurrection_trigger}</p>
        </div>
      </article>
    </section>
  );
}
