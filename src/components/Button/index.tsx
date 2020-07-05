import { h, JSX } from 'preact';

import s from './styles.css';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children?: JSX.Element | string | Array<JSX.Element | string>;
}

function Button({
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

export default Button;
