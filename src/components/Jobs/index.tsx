import { useCallback } from 'preact/hooks';

import s from './styles.css';
import { useStoreon } from '../../store';
import { FormScope } from '../../hooks/formScope';
import { classNames } from '../../util/component';
import { Item } from './Item';

export const Jobs: FC = () => {
  const { dispatch, items } = useStoreon('items');

  const updateItem: EventListener = useCallback((event) => {
    const t = event.target as HTMLFormElement;

    dispatch('items/update', {
      id: t.form.id,
      name: t.dataset.name,
      value: t.value,
    });
  }, []);

  const list = items.map((item, index, list) => {
    const cn = classNames([
      index === 0 && s.first,
      index === (list.length - 1) && s.last,
    ]);

    return (
      <li key={item.id} className={cn}>
        <FormScope.Provider value={item}>
          <Item
            id={item.id}
            update={updateItem}
          />
        </FormScope.Provider>
      </li>
    );
  });

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
};
