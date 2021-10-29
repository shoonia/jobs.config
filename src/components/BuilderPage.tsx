import { Editor } from './Editor';
import { Grid } from './Grid';
import { Preview } from './Preview';

export const BuilderPage: FC = () => (
  <Grid
    left={<Editor />}
    right={<Preview />}
  />
);
