import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState, IEvents } from '../../store';
import { useFormScope } from '../../hooks/formScope';
import { BlankButton } from '../Button';
import { IconBin } from '../Icons/IconBin';
import { IconClone } from '../Icons/IconClone';
import { IconChevron } from '../Icons/IconChevron';

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
        <BlankButton
          aria-label="Move up"
          onClick={up}
          className={s.btn_up}
          data-rh="Move up"
          data-rh-at="top"
        >
          <IconChevron up={false} />
        </BlankButton>
        <BlankButton
          aria-label="Move down"
          onClick={down}
          className={s.btn_down}
          data-rh="Move down"
          data-rh-at="top"
        >
          <IconChevron up />
        </BlankButton>
      </div>
      <div>
        <BlankButton
          aria-label="remove"
          onClick={remove}
          className={s.btn}
          data-rh="Remove"
          data-rh-at="top"
        >
          <IconBin />
        </BlankButton>
        <BlankButton
          aria-label="clone"
          onClick={clone}
          className={s.btn}
          data-rh="Clone"
          data-rh-at="top"
          disabled={isMax}
        >
          <IconClone />
        </BlankButton>
      </div>
    </div>
  );
};
