import { type FormEvent, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '../ui/Icon';

export function GlobalSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const currentQuery = location.pathname === '/ideas' ? new URLSearchParams(location.search).get('q') ?? '' : '';

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches('input, textarea, select, [contenteditable="true"]');
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (event.key === '/' && !isTyping) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  function submit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    const query = inputRef.current?.value.trim() ?? '';
    if (query) params.set('q', query);
    navigate(`/ideas${params.size ? `?${params.toString()}` : ''}`);
  }

  return (
    <form aria-label="Search the idea ledger" className="global-search" onSubmit={submit} role="search">
      <Icon name="search" />
      <label className="sr-only" htmlFor="global-search-input">
        Search ideas, decisions, and resurrection conditions
      </label>
      <input
        autoComplete="off"
        id="global-search-input"
        defaultValue={currentQuery}
        placeholder="Search why ideas lived or died…"
        ref={inputRef}
        type="search"
        key={currentQuery}
      />
      <kbd aria-hidden="true">⌘ K</kbd>
    </form>
  );
}
