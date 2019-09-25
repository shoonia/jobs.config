import { h } from 'preact';
import classNames from 'classnames/bind';

import st from './styles.css';

const cn = classNames.bind(st);

function Button({
  mode = 'primary',
  onClick,
  disabled = false,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(mode)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
