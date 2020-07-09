import { h, Fragment } from 'preact';
import { useCallback } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { IItemsState, IItemsEvents } from '../../store/items';
import { Jobs } from '../Jobs';
import { Button } from '../Button';
import { IconPlus } from './IconPlus';

export function Editor() {
  const { dispatch, items, isMax } = useStoreon<IItemsState, IItemsEvents>('items', 'isMax');

  const createItem = useCallback(() => {
    dispatch('items/new');
  }, []);

  const removeItem = useCallback(({ target }) => {
    dispatch('items/remove', target.form.id);
  }, []);

  const cloneItem = useCallback(({ target }) => {
    dispatch('items/clone', target.form.id);
  }, []);

  const updateItem = useCallback(({ target }) => {
    dispatch('items/update', {
      id: target.form.id,
      name: target.dataset.name,
      value: target.value,
    });
  }, []);

  return (
    <Fragment>
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
      <Jobs
        items={items}
        remove={removeItem}
        clone={cloneItem}
        update={updateItem}
        isMax={isMax}
      />
    </Fragment>
  );
}
