import { h } from 'preact';
import { useStoreon } from 'storeon/preact';

import { TEvents, TState } from '../../store';
import { Button } from '../Button';
import { IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';

interface Props {
  config: IConfig;
}

export const EditButton = ({ config }: Props) => {
  const { dispatch } = useStoreon<TState, TEvents>();

  const onClick = () => {
    dispatch('items/replace', createItems(config));
    location.hash = ROUTER.BUILDER;
  };

  return (
    <Button onClick={onClick}>
      Edit Config
    </Button>
  );
};
