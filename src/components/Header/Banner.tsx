import { h } from 'preact';

import s from './styles.css';
import src from '../../assets/favicon.png';

export function Banner() {
  return (
    <figure className={s.nav}>
      <a
        href="/jobs.config/"
        className={s.link}
      >
        <img
          src={src}
          width="30"
          height="30"
          alt="Corvid by Wix"
          className={s.image}
          crossOrigin="anonymous"
        />
      </a>
      <figcaption className={s.title}>
        Jobs Config
      </figcaption>
    </figure>
  );
}
