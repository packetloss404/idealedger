import type { ReactElement, SVGProps } from 'react';

export type IconName =
  | 'archive'
  | 'arrow-left'
  | 'check'
  | 'chevron-down'
  | 'compare'
  | 'external'
  | 'filter'
  | 'groups'
  | 'ideas'
  | 'menu'
  | 'moon'
  | 'plus'
  | 'search'
  | 'sun'
  | 'x';

const paths: Record<IconName, ReactElement> = {
  archive: <><path d="M4 7h16v13H4z" /><path d="M2.5 3h19v4h-19zM9 11h6" /></>,
  'arrow-left': <><path d="m15 18-6-6 6-6" /><path d="M9 12h11" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  compare: <><path d="M8 3v18M16 3v18" /><path d="m4 7 4-4 4 4M12 17l4 4 4-4" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
  filter: <path d="M4 5h16l-6 7v6l-4 2v-8z" />,
  groups: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20M14.5 14.2a4 4 0 0 1 6 3.5V20" /></>,
  ideas: <><path d="M9 18h6M10 22h4" /><path d="M8.3 15.2A7 7 0 1 1 15.7 15c-1 .7-1.7 1.5-1.7 3h-4c0-1.5-.7-2.2-1.7-2.8Z" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}>
      {paths[name]}
    </svg>
  );
}
