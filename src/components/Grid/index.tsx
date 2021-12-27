import type { ComponentChildren } from 'preact';

import s from './styles.css';

interface Props {
  left: ComponentChildren;
  right: ComponentChildren;
}

export const Grid: FC<Props> = ({ left, right }) => (
  <div className={s.box}>
    <div className={s.column}>
      {left}
    </div>
    <div className={s.column}>
      {right}
    </div>
  </div>
);
