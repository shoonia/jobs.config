import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  onClick?: EventHandlerNonNull;
  disabled?: boolean;
  children?: ComponentChildren;
  type?: 'button' | 'submit';
}

export function Button({
  onClick,
  disabled,
  children,
  type = 'button',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={s.primary}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
