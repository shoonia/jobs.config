import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  top: string;
  children: ComponentChildren;
}

export const Label = ({ top, children }: Props) => (
  <label className={s.block}>
    <span className={s.text}>
      {top}
    </span>
    {children}
  </label>
);
