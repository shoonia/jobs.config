import { h } from 'preact';

import s from './styles.css';

interface Props {
  remove: EventHandlerNonNull;
  clone: EventHandlerNonNull;
  isMax: boolean;
}

export function ItemMenu({
  remove,
  clone,
  isMax,
}: Props) {
  return (
    <div className={s.buttons}>
      <button
        type="button"
        aria-label="remove"
        onClick={remove}
        className={s.btnRemove}
        data-rh="Remove"
        data-rh-at="top"
      />
      <button
        type="button"
        aria-label="clone"
        onClick={clone}
        className={s.btnClone}
        data-rh="Clone"
        data-rh-at="top"
        disabled={isMax}
      />
    </div>
  );
}
