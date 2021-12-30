import type { ComponentChildren } from 'preact';

import s from './styles.css';
import { classNames } from '../../util/component';

interface Props {
  onClick?: EventListener;
  children?: ComponentChildren;
  className?: string;
  [key: string]: unknown;
}

export const BlankButton: FC<Props> = ({ children, className, ...rest }) => {
  const classList = classNames([
    s.blank,
    className,
  ]);

  return (
    <button
      type="button"
      className={classList}
      {...rest}
    >
      {children}
    </button>
  );
};
