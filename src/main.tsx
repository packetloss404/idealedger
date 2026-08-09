import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import './global.css';
import { ledgerManifest } from './ledger';
import { router } from './router';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Idea Ledger root element was not found.');
rootElement.dataset.sourceHash = ledgerManifest.sourceHash;

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
