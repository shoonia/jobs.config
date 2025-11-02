import type { ButtonHTMLAttributes } from 'preact';

import s from './styles.css';
import { classNames } from '../../util/component';

interface Props extends ButtonHTMLAttributes {
  className?: string;
}

export const Button: FC<Props> = ({
  type = 'button',
  onClick,
  children,
  className,
  ...rest
}) => {
  const classList = classNames([
    s.btn,
    className,
  ]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={classList}
      {...rest}
    >
      {children}
    </button>
  );
};
