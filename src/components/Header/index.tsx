import { createPortal } from 'preact/compat';

import s from './styles.css';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { GitHub } from '../GitHub';
import { Issue } from '../Issue';

const root = document.getElementById('header') as HTMLElement;

export const Header: FC = () => {
  return createPortal(
    <div className={s.header}>
      <nav className={s.nav}>
        <Banner />
        <Menu />
      </nav>
      <div className={s.git}>
        <GitHub />
        <Issue />
      </div>
    </div>,
    root,
  );
};
