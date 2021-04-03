import { ComponentChildren, FunctionComponent } from 'preact';

import s from './styles.css';

interface Props {
  onClick?: EventListener;
  disabled?: boolean;
  children?: ComponentChildren;
  type?: 'button' | 'submit';
}

export const Button: FunctionComponent<Props> = ({
  onClick,
  disabled,
  children,
  type = 'button',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={s.primary}
    disabled={disabled}
  >
    {children}
  </button>
);
