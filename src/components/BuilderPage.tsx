import { useStoreon } from 'storeon/preact';
import { ROUTER } from '../constants';

import type { IState } from '../store';
import { Editor } from './Editor';
import { Grid } from './Grid';
import { Preview } from './Preview';
import { UploadModal } from './UploadModal';

export const BuilderPage: FC = () => {
  const { path } = useStoreon<IState>('path');

  return (
    <>
      <Grid
        left={<Editor />}
        right={<Preview />}
      />
      {path === ROUTER.UPLOAD && (
        <UploadModal />
      )}
    </>
  );
};
