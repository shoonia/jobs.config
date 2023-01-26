import { useStoreon } from '../../store';
import { Button } from '../Button';
import { Toolbar } from '../Toolbar';
import { IconPlus } from '../Icons/IconPlus';
import { IconUpload } from '../Icons/IconUpload';
import { ROUTER } from '../../constants';

export const Buttons: FC = () => {
  const { dispatch, isMax } = useStoreon('isMax');

  const createItem: EventListener = () => {
    dispatch('items/new');
  };

  const openUploadModal: EventListener = () => {
    location.hash = ROUTER.UPLOAD;
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
      <Toolbar.Hint label="Upload your config">
        <Button
          onClick={openUploadModal}
          aria-label="Upload your config"
        >
          <IconUpload />
        </Button>
      </Toolbar.Hint>
    </Toolbar.Wrapper>
  );
};
