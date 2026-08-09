import { createElement, type ReactNode, useId } from 'react';

export function EmptyState({
  action,
  description,
  headingLevel = 2,
  title,
}: {
  action?: ReactNode;
  description: ReactNode;
  headingLevel?: 1 | 2;
  title: string;
}) {
  const headingId = useId();
  return (
    <section className="empty-state" aria-labelledby={headingId}>
      <span className="empty-state-rule" aria-hidden="true" />
      {createElement(`h${headingLevel}`, { id: headingId }, title)}
      <p>{description}</p>
      {action ? <div className="empty-state-action">{action}</div> : null}
    </section>
  );
}
