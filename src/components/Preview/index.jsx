import { h } from 'preact';
import useStoreon from 'storeon/preact';

import { createConfig } from './fn';
import st from './styles.css';

function Preview() {
  const { items } = useStoreon('items');

  return (
    <textarea
      className={st.out}
      readOnly
    >
      {createConfig(items)}
    </textarea>
  );
}

export default Preview;
