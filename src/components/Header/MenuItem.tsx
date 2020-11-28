import { h, ComponentChildren } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { TState } from '../../store';
import { classNames } from '../../util/component';
import { ROUTER } from '../../constants';

interface Props {
  children: ComponentChildren;
  path: ROUTER;
}

export function MenuItem({ children, path }: Props) {
  const { path: currentPath } = useStoreon<TState>('path');

  const className = classNames([
    s.link,
    path === currentPath && s.active,
  ]);

  return (
    <li className={s.item}>
      <a href={`#${path}`} className={className}>
        {children}
      </a>
    </li>
  );
}
