import { h } from 'preact';

import st from './styles.css';

function Header() {
  return (
    <div className={st.header}>
      <a
        href="/jobs.config"
        className={st.link}
      >
        jobs.config
      </a>
    </div>
  );
}

export default Header;
