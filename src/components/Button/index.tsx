import type { ComponentChildren } from 'preact';
import { classNames } from '../../util/component';

import s from './styles.css';

interface Props {
  onClick?: EventListener;
  disabled?: boolean;
  children?: ComponentChildren;
  className?: string;
  [key: string]: unknown;
}

export const Button: FC<Props> = ({
  onClick,
  children,
  className,
  ...rest
}) => {
  const buttonClassName = classNames([
    s.btn,
    className,
  ]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClassName}
      {...rest}
    >
      {children}
    </button>
  );
};
