import { h } from 'preact';
import classNames from 'classnames/bind';

import s from './styles.css';

const cn = classNames.bind(s);

function Button({
  mode = 'primary',
  onClick,
  disabled = false,
  children,
}) {
  return (
    <button
      type="button"
      onClick={disabled ? null : onClick}
      className={cn(mode)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
