import { Link } from 'react-router-dom';

import { Icon } from '../ui/Icon';
import { useCompare } from './CompareContext';

export function CompareTray() {
  const { clear, remove, selected } = useCompare();
  if (!selected.length) return null;
  const ids = selected.map((idea) => idea.id).join(',');

  return (
    <aside aria-label="Comparison tray" className="compare-tray">
      <div className="compare-tray-label" data-count={selected.length}>
        <Icon name="compare" />
        <span><strong>{selected.length}</strong> selected</span>
      </div>
      <div className="compare-tray-items">
        {selected.map((idea) => (
          <span className="compare-tray-chip" key={idea.id}>
            {idea.name}
            <button aria-label={`Remove ${idea.name} from comparison`} onClick={() => remove(idea.id)} type="button">
              <Icon name="x" />
            </button>
          </span>
        ))}
      </div>
      <div className="compare-tray-actions">
        <button className="text-button" onClick={clear} type="button">Clear</button>
        {selected.length >= 2 ? (
          <Link className="button button-primary" to={`/compare?ids=${encodeURIComponent(ids)}`}>
            Compare {selected.length}
          </Link>
        ) : (
          <button className="button button-primary" disabled type="button">
            Compare {selected.length}
          </button>
        )}
      </div>
    </aside>
  );
}
