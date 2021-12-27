import { useStoreon } from 'storeon/preact';

import type { IState } from '../store';
import { Editor } from './Editor';
import { Grid } from './Grid';
import { Preview } from './Preview';
import { UploadModal } from './UploadModal';

export const BuilderPage: FC = () => {
  const { openModal } = useStoreon<IState>('openModal');

  return (
    <>
      <Grid
        left={<Editor />}
        right={<Preview />}
      />
      {openModal && (
        <UploadModal />
      )}
    </>
  );
};
