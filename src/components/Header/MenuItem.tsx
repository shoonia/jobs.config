import type { ComponentChildren } from 'preact';

import s from './styles.css';
import type { ROUTER } from '../../constants';
import { useRouterStore } from '../../store/useRouterStore';
import { classNames } from '../../util/component';

interface Props {
  children: ComponentChildren;
  path: ROUTER;
}

export const MenuItem: FC<Props> = ({ children, path }) => {
  const isActive = useRouterStore().path === path;

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
        aria-current={isActive ? 'page' : undefined}
        tabIndex={0}
      >
        {children}
      </a>
    </li>
  );
};
