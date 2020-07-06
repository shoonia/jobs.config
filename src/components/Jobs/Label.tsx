import { h, JSX } from 'preact';

import s from './styles.css';

interface Props {
 top: string;
 children: JSX.Element;
 }

export function Label({ top, children }: Props) {
  return (
    <label className={s.block}>
      <span className={s.text}>
        {top}
      </span>
      {children}
    </label>
  );
}
