import { h } from 'preact';

import s from './styles.css';
import GitHub from '../GitHub';

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
      <GitHub />
    </div>
  );
}

export default Header;
