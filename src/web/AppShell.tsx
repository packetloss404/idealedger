import { NavLink, Outlet } from 'react-router-dom';

import { ideas, sourceMeta } from './ledger-adapter';
import { CompareProvider, useCompare } from './components/CompareContext';
import { CompareTray } from './components/CompareTray';
import { GlobalSearch } from './components/GlobalSearch';
import { ThemeToggle } from './components/ThemeToggle';
import { Icon } from './ui/Icon';
import './styles.css';

function AppNavigation() {
  const { selected } = useCompare();
  return (
    <nav aria-label="Primary" className="primary-nav">
      <NavLink end to="/">
        <Icon name="archive" />
        <span>Now</span>
      </NavLink>
      <NavLink to="/ideas">
        <Icon name="ideas" />
        <span>Ideas</span>
        <span className="nav-count">{ideas.length}</span>
      </NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} ${selected.length < 2 ? 'nav-link-muted' : ''}`} to={selected.length >= 2 ? `/compare?ids=${selected.map((idea) => idea.id).join(',')}` : '/compare'}>
        <Icon name="compare" />
        <span>Compare</span>
        {selected.length ? <span className="nav-count">{selected.length}</span> : null}
      </NavLink>
    </nav>
  );
}

function AppShellBody() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="app-sidebar">
        <NavLink aria-label="Idea Ledger home" className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">IL</span>
          <span className="brand-copy">
            <strong>Idea Ledger</strong>
            <small>Decision archive</small>
          </span>
        </NavLink>
        <AppNavigation />
        <div className="sidebar-note">
          <span className="read-only-dot" aria-hidden="true" />
          <div>
            <strong>Read-only snapshot</strong>
            <span>Updated {sourceMeta.updatedAt}</span>
          </div>
        </div>
      </aside>

      <header className="app-topbar">
        <div className="mobile-brand">
          <span className="brand-mark" aria-hidden="true">IL</span>
          <strong>Idea Ledger</strong>
        </div>
        <GlobalSearch />
        <ThemeToggle />
      </header>

      <main id="main-content" className="app-content">
        <Outlet />
      </main>

      <div className="mobile-navigation"><AppNavigation /></div>
      <CompareTray />
    </div>
  );
}

export function AppShell() {
  return (
    <CompareProvider>
      <AppShellBody />
    </CompareProvider>
  );
}

export default AppShell;
