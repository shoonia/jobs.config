import type { ComponentChildren } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState } from '../../store';
import type { ROUTER } from '../../constants';
import { classNames } from '../../util/component';

interface Props {
  children: ComponentChildren;
  path: ROUTER;
}

export const MenuItem: FC<Props> = ({ children, path }) => {
  const i = useStoreon<IState>('path');
  const isActive = i.path === path;

  const className = classNames([
    s.link,
    isActive && s.active,
  ]);

  const onClick: EventListener = (event) => {
    event.preventDefault();
    location.hash = path;
  };

  return (
    <li className={s.item}>
      <a
        href={path}
        className={className}
        onClick={onClick}
        aria-current={isActive ? 'page' : null}
      >
        {children}
      </a>
    </li>
  );
};
