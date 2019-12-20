import { h } from 'preact';
import classNames from 'classnames/bind';

import s from './styles.css';

const cn = classNames.bind(s);

function Button({
  mode,
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      type="button"
      onClick={disabled ? null : onClick}
      className={cn(mode || 'primary')}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
