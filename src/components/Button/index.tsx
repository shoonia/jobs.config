import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  onClick?: EventHandlerNonNull;
  disabled?: boolean;
  children?: ComponentChildren;
}

export function Button({
  onClick,
  disabled,
  children,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={s.primary}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
