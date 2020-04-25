import { h } from 'preact';

import s from './styles.css';

function Label({ top, children }) {
  return (
    <label className={s.block}>
      <span className={s.text}>
        {top}
      </span>
      {children}
    </label>
  );
}

export default Label;
