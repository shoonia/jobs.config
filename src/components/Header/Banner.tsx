import { FunctionComponent, h } from 'preact';

import s from './styles.css';
import { Logo } from './Logo';

export const Banner: FunctionComponent = () => (
  <figure className={s.nav}>
    <a href="/jobs.config/">
      <Logo />
    </a>
    <figcaption className={s.title}>
      Jobs Config
    </figcaption>
  </figure>
);
