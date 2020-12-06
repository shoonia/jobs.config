import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  onClick?: EventHandlerNonNull;
  disabled?: boolean;
  children?: ComponentChildren;
  type?: 'button' | 'submit';
}

export const Button = ({
  onClick,
  disabled,
  children,
  type = 'button',
}: Props) => (
  <button
    type={type}
    onClick={onClick}
    className={s.primary}
    disabled={disabled}
  >
    {children}
  </button>
);
