import type { JSX } from 'preact';

import s from './styles.css';
import { classNames } from '../../util/component';

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
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
