import { useState } from 'react';

import { useCompare } from './CompareContext';

export function CompareToggle({ id, name, compact = false }: { id: string; name: string; compact?: boolean }) {
  const { isSelected, toggle } = useCompare();
  const selected = isSelected(id);
  const [message, setMessage] = useState('');

  return (
    <div className={compact ? 'compare-toggle compare-toggle-compact' : 'compare-toggle'}>
      <label>
        <input
          checked={selected}
          onChange={() => {
            const result = toggle(id);
            setMessage(result.limitReached ? 'Comparison limit reached.' : '');
          }}
          type="checkbox"
        />
        <span>{compact ? 'Compare' : selected ? 'Added to compare' : 'Add to compare'}</span>
      </label>
      <span aria-live="polite" className="sr-only">
        {message || `${name} ${selected ? 'is in' : 'is not in'} comparison`}
      </span>
    </div>
  );
}
