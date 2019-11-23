import { h } from 'preact';

import st from './styles.css';
import Icon from '../Icon';

function ItemMenu({ id, remove, clone }) {
  return (
    <div className={st.buttons}>
      <button
        type="button"
        aria-label="remove"
        value={id}
        onClick={remove}
        className={st.btnRemove}
        data-rh="Remove"
        data-rh-at="top"
      >
        <Icon name="bin" />
      </button>
      <button
        type="button"
        aria-label="clone"
        value={id}
        onClick={clone}
        className={st.btnClone}
        data-rh="Clone"
        data-rh-at="top"
      >
        <Icon name="copy" />
      </button>
    </div>
  );
}

export default ItemMenu;
