import { useEffect, useState } from 'react';

import { Icon } from '../ui/Icon';

type ThemePreference = 'light' | 'dark';

function systemTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function storedTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved: unknown = window.localStorage.getItem('idea-ledger:theme');
    return saved === 'dark' || saved === 'light' ? saved : systemTheme();
  } catch {
    return systemTheme();
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>(storedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('idea-ledger:theme', theme);
    } catch {
      // The selected theme still applies when persistent storage is unavailable.
    }
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      aria-label={`Use ${nextTheme} appearance`}
      className="icon-button"
      onClick={() => setTheme(nextTheme)}
      title={`Use ${nextTheme} appearance`}
      type="button">
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
}
