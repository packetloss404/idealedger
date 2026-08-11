import { createBrowserRouter } from 'react-router';

import { routerBasename } from './ledger';
import { AppShell } from './web/AppShell';
import {
  ComparePage,
  DashboardPage,
  FocusGroupsPage,
  IdeaDetailPage,
  IdeasPage,
  NotFoundPage,
  ResearchPage,
} from './web/pages';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: AppShell,
      children: [
        { index: true, Component: DashboardPage },
        { path: 'ideas', Component: IdeasPage },
        { path: 'ideas/:id', Component: IdeaDetailPage },
        { path: 'focus-groups', Component: FocusGroupsPage },
        { path: 'compare', Component: ComparePage },
        { path: 'research/:slug', Component: ResearchPage },
        { path: '*', Component: NotFoundPage },
      ],
    },
  ],
  { basename: routerBasename(import.meta.env.BASE_URL) },
);
