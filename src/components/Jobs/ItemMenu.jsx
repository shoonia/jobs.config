import { h } from 'preact';

import st from './styles.css';

function ItemMenu({
  id,
  remove,
  clone,
  isMax,
}) {
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
      />
      <button
        type="button"
        aria-label="clone"
        value={id}
        onClick={isMax ? null : clone}
        className={st.btnClone}
        data-rh="Clone"
        data-rh-at="top"
        disabled={isMax}
      />
    </div>
  );
}

export default ItemMenu;
