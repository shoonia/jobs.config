import { h } from 'preact';

import st from './styles.css';

function Grid({ header, left, right }) {
  return (
    <div className={st.wrapper}>
      <header className={st.header}>
        {header}
      </header>
      <main className={st.container}>
        <section className={st.left}>
          {left}
        </section>
        <section className={st.right}>
          {right}
        </section>
      </main>
      <footer />
    </div>
  );
}

export default Grid;
