import { FunctionComponent, h } from 'preact';
import { createPortal } from 'preact/compat';

import s from './styles.css';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { GitHub } from '../GitHub';

const root = document.getElementById('header') as HTMLElement;

export const Header: FunctionComponent = () => {
  return createPortal(
    <div className={s.header}>
      <nav className={s.nav}>
        <Banner />
        <Menu />
      </nav>
      <GitHub />
    </div>,
    root,
  );
};
