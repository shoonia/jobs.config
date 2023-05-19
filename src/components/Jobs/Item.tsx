import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { classNames, preventDefault } from '../../util/component';
import { useNewItem } from '../../hooks/useNewItem';
import { useStore } from '../../store';

interface Props {
  id: string;
  isNew?: boolean;
}

export const Item: FC<Props> = ({ id, isNew }) => {
  const store = useStore();

  useNewItem(id, isNew);

  const updateItem: EventListener = (event) => {
    const el = event.target as HTMLFormElement;

    store.dispatch('items/update', {
      id: el.form.id,
      name: el.dataset.name,
      value: el.value,
    });
  };

  return (
    <form
      id={id}
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
