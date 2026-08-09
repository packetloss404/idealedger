import type { ReactNode } from 'react';

export function PageHeader({
  actions,
  eyebrow,
  intro,
  title,
}: {
  actions?: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  title: ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="page-header-copy">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 tabIndex={-1}>{title}</h1>
        {intro ? <div className="page-intro">{intro}</div> : null}
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </header>
  );
}
