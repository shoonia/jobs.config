import { ComponentChildren, FunctionComponent, h } from 'preact';

import s from './styles.css';

interface Props {
  left: ComponentChildren;
  right: ComponentChildren;
}

export const Grid: FunctionComponent<Props> = ({ left, right }) => (
  <div className={s.box}>
    <div className={s.left}>
      {left}
    </div>
    <div className={s.right}>
      {right}
    </div>
  </div>
);
