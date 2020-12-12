import { FunctionComponent, h } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { Button } from '../Button';
import { IconPlus } from './IconPlus';
import { TState, TEvents } from '../../store';

export const CreateButton: FunctionComponent = () => {
  const { dispatch, isMax } = useStoreon<TState, TEvents>('isMax');

  const createItem: EventHandlerNonNull = () => {
    dispatch('items/new');
  };

  return (
    <div className={s.section}>
      <span
        data-rh="You can configure up to 20 jobs."
        className={s.tooltip}
      >
        <Button
          onClick={createItem}
          disabled={isMax}
        >
          <IconPlus />
          {' New Job'}
        </Button>
      </span>
    </div>
  );
};
