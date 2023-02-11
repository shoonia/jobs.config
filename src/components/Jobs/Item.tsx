import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { classNames, preventDefault } from '../../util/component';
import { useNewItem } from '../../hooks/useNewItem';

interface Props {
  id: string;
  update: EventListener;
  isNew?: boolean;
}

export const Item: FC<Props> = ({ id, update, isNew }) => {
  useNewItem(id, isNew);

  return (
    <form
      id={id}
      action="#"
      className={classNames([s.item, isNew && s.new])}
      onInput={update}
      onSubmit={preventDefault}
    >
      <FunctionInfo />
      <Period />
      <ExecutionConfig />
      <ItemMenu />
    </form>
  );
};
