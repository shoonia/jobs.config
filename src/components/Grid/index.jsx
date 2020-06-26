import { h } from 'preact';

import s from './styles.css';
import SEO from '../SEO';

function Grid({ header, left, right }) {
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

export default Grid;
