import { useItemsStore } from '../../store/useItemsStore';
import { Button } from '../Button';
import { ToolbarWrapper, ToolbarHint } from '../Toolbar';
import { IconPlus } from '../Icons/IconPlus';
import { IconUpload } from '../Icons/IconUpload';
import { MAX_ITEMS, ROUTER } from '../../constants';

const openUploadModal: EventListener = () => {
  location.hash = ROUTER.UPLOAD;
};

export const Buttons: FC = () => {
  const { items, add } = useItemsStore();

  return (
    <ToolbarWrapper>
      <ToolbarHint label="You can configure up to 20 jobs">
        <Button
          onClick={add}
          disabled={items.length >= MAX_ITEMS}
        >
          <IconPlus />
          {' New Job'}
        </Button>
      </ToolbarHint>
      <ToolbarHint label="Upload your config">
        <Button
          onClick={openUploadModal}
          aria-label="Upload your config"
        >
          <IconUpload />
        </Button>
      </ToolbarHint>
    </ToolbarWrapper>
  );
};
