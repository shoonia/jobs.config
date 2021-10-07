import type { ComponentChildren, FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState } from '../../store';
import type { ROUTER } from '../../constants';
import { classNames } from '../../util/component';

interface Props {
  children: ComponentChildren;
  path: ROUTER;
}

export const MenuItem: FunctionComponent<Props> = ({ children, path }) => {
  const i = useStoreon<IState>('path');
  const isActive = i.path === path;

  const className = classNames([
    s.link,
    isActive && s.active,
  ]);

  return (
    <li className={s.item}>
      <a
        href={path}
        className={className}
        aria-current={isActive ? 'page' : null}
      >
        {children}
      </a>
    </li>
  );
};
