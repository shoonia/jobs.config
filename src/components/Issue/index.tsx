import { FunctionComponent } from 'preact';

import s from './Issue.css';

export const Issue: FunctionComponent = () => (
  <a
    className={s.issue}
    href="https://github.com/shoonia/jobs.config/issues"
    target="_blank"
    rel="noreferrer"
    aria-label="Report issue"
    data-rh="Report issue"
    data-rh-at="left"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
      />
    </svg>
  </a>
);
