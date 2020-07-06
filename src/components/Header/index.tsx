import { h } from 'preact';

import s from './styles.css';
import src from '../../assets/favicon.png';
import { GitHub } from '../GitHub';

export function Header() {
  return (
    <div className={s.header}>
      <a
        href="/jobs.config/"
        className={s.link}
      >
        <figure className={s.banner}>
          <img
            src={src}
            width="30"
            height="30"
            alt="Corvid by Wix"
            className={s.image}
          />
          <figcaption className={s.title}>
            Jobs Config Builder
          </figcaption>
        </figure>
      </a>
      <GitHub />
    </div>
  );
}
