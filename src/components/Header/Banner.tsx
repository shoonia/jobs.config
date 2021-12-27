import s from './styles.css';
import { Logo } from '../Icons/Logo';

export const Banner: FC = () => (
  <figure className={s.nav}>
    <a href="/jobs.config/">
      <Logo />
    </a>
    <figcaption className={s.title}>
      Jobs Config
    </figcaption>
  </figure>
);
