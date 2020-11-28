import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { Item } from './Item';
import { TState, TEvents } from '../../store';

export function Jobs() {
  const { dispatch, items, isMax } = useStoreon<TState, TEvents>('items', 'isMax');

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

  const list = items.map((item) => (
    <Item
      key={item.id}
      data={item}
      remove={removeItem}
      clone={cloneItem}
      update={updateItem}
      isMax={isMax}
    />
  ));

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
}
