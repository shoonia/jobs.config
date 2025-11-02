import type { ButtonHTMLAttributes } from 'preact';

import s from './styles.css';
import { classNames } from '../../util/component';

interface Props extends ButtonHTMLAttributes {
  className?: string;
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
