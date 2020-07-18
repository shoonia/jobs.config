import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { Button } from '../Button';
import { IconPlus } from './IconPlus';
import { IItemsState, IItemsEvents } from '../../store/items';

export function CreateButton() {
  const { dispatch, isMax } = useStoreon<IItemsState, IItemsEvents>('isMax');

  const createItem = useCallback(() => {
    dispatch('items/new');
  }, []);

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
}
