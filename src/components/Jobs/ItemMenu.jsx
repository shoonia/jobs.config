import { h } from 'preact';

import st from './styles.css';

function ItemMenu({ id, remove, clone }) {
  return (
    <div className={st.buttons}>
      <button
        value={id}
        onClick={remove}
      >
        x
      </button>
      <button
        value={id}
        onClick={clone}
      >
        clone
      </button>
    </div>
  );
}

export default ItemMenu;
