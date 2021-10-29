import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState, IEvents } from '../../store';
import { useFormScope } from '../../hooks/formScope';

export const ItemMenu: FC = () => {
  const { id } = useFormScope();
  const { dispatch, isMax } = useStoreon<IState, IEvents>('isMax');

  const up: EventListener = () => {
    dispatch('items/up', id);
  };

  const down: EventListener = () => {
    dispatch('items/down', id);
  };

  const remove: EventListener = () => {
    dispatch('items/remove', id);
  };

  const clone: EventListener = () => {
    dispatch('items/clone', id);
  };

  return (
    <div className={s.buttons}>
      <div>
        <button
          type="button"
          aria-label="Move up"
          onClick={up}
          className={s.btn_up}
          data-rh="Move up"
          data-rh-at="top"
        />
        <button
          type="button"
          aria-label="Move down"
          onClick={down}
          className={s.btn_down}
          data-rh="Move down"
          data-rh-at="top"
        />
      </div>
      <div>
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
    </div>
  );
};
