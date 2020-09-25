import { ComponentChildren, h } from 'preact';

import s from './styles.css';
import { SEO } from '../SEO';

interface Props {
  header: ComponentChildren;
  left: ComponentChildren;
  right: ComponentChildren;
}

export function Grid({ header, left, right }: Props) {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        {header}
      </header>
      <main className={s.container}>
        <SEO />
        <div className={s.left}>
          {left}
        </div>
        <div className={s.right}>
          {right}
        </div>
      </main>
    </div>
  );
}
