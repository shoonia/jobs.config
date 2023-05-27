import { useEffect } from 'preact/hooks';

import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { classNames, preventDefault } from '../../util/component';
import { useStore } from '../../store';

interface Props {
  id: string;
  isNew?: boolean;
}

export const Item: FC<Props> = ({ id, isNew }) => {
  const store = useStore();

  useEffect(() => {
    if (isNew) {
      const t = setTimeout(() => {
        store.dispatch('items/update', {
          id,
          name: 'isNew',
          value: undefined,
        });
      }, 500);

      return () => clearTimeout(t);
    }
  }, []);

  const updateItem: EventListener = (event) => {
    const el = event.target as HTMLFormElement;

    store.dispatch('items/update', {
      id,
      name: el.dataset.name,
      value: el.value,
    });
  };

  return (
    <form
      action="#"
      className={classNames([s.item, isNew && s.new])}
      onInput={updateItem}
      onSubmit={preventDefault}
    >
      <FunctionInfo />
      <Period />
      <ExecutionConfig />
      <ItemMenu />
    </form>
  );
};
