import type { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import type { TEvents, TState } from '../../store';
import { Button } from '../Button';
import { IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';

interface Props {
  config: IConfig;
}

export const EditButton: FunctionComponent<Props> = ({ config }) => {
  const { dispatch } = useStoreon<TState, TEvents>();

  const onClick: EventListener = () => {
    dispatch('items/replace', createItems(config));
    location.hash = ROUTER.BUILDER;
  };

  return (
    <Button onClick={onClick}>
      Edit Config
    </Button>
  );
};
