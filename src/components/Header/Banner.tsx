import s from './styles.css';
import { Logo } from '../Icons/Logo';

export const Banner: FC = () => (
  <figure className={s.nav}>
    <a
      href="/jobs.config/"
      tabIndex={0}
    >
      <Logo />
    </a>
    <figcaption className={s.title}>
      Jobs Config
    </figcaption>
  </figure>
);
