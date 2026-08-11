import { Link, useParams } from 'react-router-dom';

import { getFocusGroupStudyById } from '../../ledger';
import { EmptyState } from '../components/EmptyState';
import { FocusGroupMethodLabel, FocusGroupStudyBody } from '../components/FocusGroupStudy';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../ui/Icon';

export function FocusGroupDetailPage() {
  const { id } = useParams<{ id: string }>();
  const study = getFocusGroupStudyById(id);

  if (!study) {
    return (
      <div className="page page-not-found">
        <EmptyState
          action={<Link className="button button-primary" to="/focus-groups">Open the focus-group dashboard</Link>}
          description={<>No canonical focus-group study has the ID <code>{id}</code>. The route may be stale or mistyped.</>}
          headingLevel={1}
          title="Focus-group study not found"
        />
      </div>
    );
  }

  return (
    <div className="page page-focus-study">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link to="/focus-groups"><Icon name="arrow-left" /> Focus-group dashboard</Link>
      </nav>
      <PageHeader
        actions={<Link className="button button-secondary" to={study.dossierRoute}>Read source dossier</Link>}
        eyebrow={<><FocusGroupMethodLabel study={study} /><time dateTime={study.conducted_at}>{study.conducted_at}</time></>}
        intro={<><p>{study.summary}</p><small>{study.sample_label}</small></>}
        title={study.title}
      />
      <FocusGroupStudyBody study={study} />
    </div>
  );
}
