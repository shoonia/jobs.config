import { useStore } from '../../store';
import { Button } from '../Button';
import { type IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';

interface Props {
  config: IConfig;
}

export const EditButton: FC<Props> = ({ config }) => {
  const store = useStore();

  const onClick: EventListener = () => {
    store.dispatch('items/replace', createItems(config));
    location.hash = ROUTER.BUILDER;
  };

  return (
    <Button onClick={onClick}>
      Edit Config
    </Button>
  );
};
