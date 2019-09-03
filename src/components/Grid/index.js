import { h } from 'preact';

import st from './styles.css';

function Grid({ header, left, right }) {
  return (
    <div className={st.wrapper}>
      <div className={st.header}>
        {header}
      </div>
      <div className={st.container}>
        <section className={st.left}>
          {left}
        </section>
        <section className={st.right}>
          {right}
        </section>
      </div>
    </div>
  );
}

export default Grid;
