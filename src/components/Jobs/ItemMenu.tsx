import type { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState, IEvents } from '../../store';
import { useFormScope } from '../../hooks/formScope';

export const ItemMenu: FunctionComponent = () => {
  const { id } = useFormScope();
  const { dispatch, isMax } = useStoreon<IState, IEvents>('isMax');

  const remove: EventListener = () => {
    dispatch('items/remove', id);
  };

  const clone: EventListener = () => {
    dispatch('items/clone', id);
  };

  return (
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
};
