import { fitLabels, statusLabels } from '../ledger-adapter';
import type { HackathonFit, IdeaStatus } from '../types';

export function StatusLabel({ status }: { status: IdeaStatus }) {
  return <span className={`status-label status-${status}`}>{statusLabels[status]}</span>;
}
export function FitLabel({ fit }: { fit: HackathonFit }) {
  return <span className={`fit-label fit-${fit}`}>{fitLabels[fit]}</span>;
}
