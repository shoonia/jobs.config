import type { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { TState, TEvents } from '../../store';
import { Button } from '../Button';
import { IconPlus } from './IconPlus';

export const CreateButton: FunctionComponent = () => {
  const { dispatch, isMax } = useStoreon<TState, TEvents>('isMax');

  const createItem: EventListener = () => {
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
