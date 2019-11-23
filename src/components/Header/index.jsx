import { h } from 'preact';

import st from './styles.css';

function Header() {
  return (
    <div className={st.header}>
      <a
        href="/jobs.config"
        className={st.link}
      >
        <h1 className={st.title}>
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
