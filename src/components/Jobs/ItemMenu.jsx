import { h } from 'preact';

import s from './styles.css';

function ItemMenu({
  id,
  remove,
  clone,
  isMax,
}) {
  return (
    <div className={s.buttons}>
      <button
        type="button"
        aria-label="remove"
        value={id}
        onClick={remove}
        className={s.btnRemove}
        data-rh="Remove"
        data-rh-at="top"
      />
      <button
        type="button"
        aria-label="clone"
        value={id}
        onClick={isMax ? null : clone}
        className={s.btnClone}
        data-rh="Clone"
        data-rh-at="top"
        disabled={isMax}
      />
    </div>
  );
}

export default ItemMenu;
