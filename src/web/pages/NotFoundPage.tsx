import { Link } from 'react-router-dom';

import { EmptyState } from '../components/EmptyState';

export function NotFoundPage() {
  return (
    <div className="page page-not-found">
      <EmptyState
        action={<div className="empty-actions"><Link className="button button-primary" to="/ideas">Search ideas</Link><Link className="button button-secondary" to="/">Go to Now</Link></div>}
        description="This route is not part of the generated ledger. Search the canonical archive instead of guessing another path."
        headingLevel={1}
        title="Page not found"
      />
    </div>
  );
}
