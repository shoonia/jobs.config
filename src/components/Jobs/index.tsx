import { useCallback } from 'preact/hooks';

import s from './styles.css';
import { useStoreon } from '../../store';
import { FormScope } from '../../hooks/formScope';
import { classNames } from '../../util/component';
import { Item } from './Item';

export const Jobs: FC = () => {
  const { dispatch, items } = useStoreon('items');
  const len = items.length - 1;

  const updateItem = useCallback(({ target }) => {
    dispatch('items/update', {
      id: target.form.id,
      name: target.dataset.name,
      value: target.value,
    });
  }, []);

  const list = items.map((item, index) => {
    const cn = classNames([
      index === 0 && s.first,
      index === len && s.last,
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
