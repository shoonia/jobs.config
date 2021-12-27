import { useStoreon } from 'storeon/preact';

import type { IState, IEvents } from '../../store';
import { Button } from '../Button';
import { Toolbar } from '../Toolbar';
import { IconPlus } from '../Icons/IconPlus';
import { IconUpload } from '../Icons/IconUpload';

export const Buttons: FC = () => {
  const { dispatch, isMax } = useStoreon<IState, IEvents>('isMax');

  const createItem: EventListener = () => {
    dispatch('items/new');
  };

  const openUploadModal: EventListener = () => {
    dispatch('router/open-modal', true);
  };

  return (
    <Toolbar.Wrapper>
      <Toolbar.Hint label="You can configure up to 20 jobs">
        <Button
          onClick={createItem}
          disabled={isMax}
        >
          <IconPlus />
          {' New Job'}
        </Button>
      </Toolbar.Hint>
      <Toolbar.Hint label="Upload config">
        <Button onClick={openUploadModal}>
          <IconUpload />
        </Button>
      </Toolbar.Hint>
    </Toolbar.Wrapper>
  );
};
