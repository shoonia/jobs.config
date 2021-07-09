import { FunctionComponent } from 'preact';

import s from './styles.css';

interface Props {
  remove: EventListener;
  clone: EventListener;
  isMax: boolean;
}

export const ItemMenu: FunctionComponent<Props> = ({
  remove,
  clone,
  isMax,
}) => (
  <div className={s.buttons}>
    <button
      type="button"
      aria-label="remove"
      onClick={remove}
      className={s.btn_remove}
      data-rh="Remove"
      data-rh-at="top"
    />
    <button
      type="button"
      aria-label="clone"
      onClick={clone}
      className={s.btn_clone}
      data-rh="Clone"
      data-rh-at="top"
      disabled={isMax}
    />
  </div>
);
