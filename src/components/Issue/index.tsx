import s from './Issue.css';
import { IssueIcon } from '../Icons/IssueIcon';

export const Issue: FC = () => (
  <a
    className={s.issue}
    href="https://github.com/shoonia/jobs.config/issues"
    target="_blank"
    rel="noreferrer"
    aria-label="Report issue"
    data-rh="Report issue"
    data-rh-at="left"
  >
    <IssueIcon />
  </a>
);
