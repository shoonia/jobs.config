import { ComponentChildren, FunctionComponent } from 'preact';
import { classNames } from '../../util/component';

import s from './styles.css';

interface Props {
  blank?: boolean;
  primary?: boolean;
  onClick?: EventListener;
  disabled?: boolean;
  children?: ComponentChildren;
  type?: 'button' | 'submit';
  className?: string;
  [key: string]: unknown;
}

export const Button: FunctionComponent<Props> = ({
  blank = false,
  primary = false,
  onClick,
  children,
  type = 'button',
  className,
  ...rest
}) => {
  const buttonClassName = classNames([
    blank && s.blank,
    primary && s.primary,
    className,
  ]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClassName}
      {...rest}
    >
      {children}
    </button>
  );
};
