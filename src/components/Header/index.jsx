import { h } from 'preact';

import s from './styles.css';

function Header() {
  return (
    <div className={s.header}>
      <a
        href="/jobs.config"
        className={s.link}
      >
        <h1 className={s.title}>
          jobs.config builder
        </h1>
      </a>
      <span
        data-rh="Repository on GitHub"
        data-rh-at="left"
      >
        <a
          className="github-button"
          href="https://github.com/shoonia/jobs.config"
          data-size="large"
          data-show-count="true"
          aria-label="Star on GitHub"
        >
          Star
        </a>
      </span>
    </div>
  );
}

export default Header;
