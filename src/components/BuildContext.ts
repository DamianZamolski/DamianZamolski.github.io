import type { FetchJson } from './FetchJson';
import type { ReportProgress } from './ReportProgress';

export type BuildContext = {
  fetchJson: FetchJson;
  report: ReportProgress;
};
