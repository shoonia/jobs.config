import { h } from 'preact';

import s from './styles.css';

function Button({
  onClick,
  disabled,
  children,
}) {
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

export default Button;
