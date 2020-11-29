import { h } from 'preact';

import s from './styles.css';

export function Fallback() {
  return (
    <div className={s.box}>
      <div className={s.i1}></div>
      <div className={s.i2}></div>
      <div className={s.i3}></div>
    </div>
  );
}
