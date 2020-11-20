import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  left: ComponentChildren;
  right: ComponentChildren;
}

export function Grid({ left, right }: Props) {
  return (
    <div className={s.box}>
      <div className={s.left}>
        {left}
      </div>
      <div className={s.right}>
        {right}
      </div>
    </div>
  );
}
