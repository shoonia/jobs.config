import { useItemsStore } from '../../store/useItemsStore';
import { Button } from '../Button';
import { IconEdit } from '../Icons/IconEdit';
import { type IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';

interface Props {
  config: IConfig;
}

export const EditButton: FC<Props> = ({ config }) => {
  const onClick: EventListener = () => {
    useItemsStore.setState({ items: createItems(config) });
    location.hash = ROUTER.BUILDER;
  };

  return (
    <Button onClick={onClick}>
      <IconEdit />
      Edit Config
    </Button>
  );
};
