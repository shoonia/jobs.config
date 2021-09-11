import type { FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { TState, TEvents } from '../../store';
import { FormScope } from '../../hooks/formScope';
import { Item } from './Item';

export const Jobs: FunctionComponent = () => {
  const { dispatch, items } = useStoreon<TState, TEvents>('items');

  const updateItem = useCallback(({ target }) => {
    dispatch('items/update', {
      id: target.form.id,
      name: target.dataset.name,
      value: target.value,
    });
  }, []);

  const list = items.map((item) => (
    <li key={item.id}>
      <FormScope.Provider value={item}>
        <Item
          id={item.id}
          update={updateItem}
        />
      </FormScope.Provider>
    </li>
  ));

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
};
