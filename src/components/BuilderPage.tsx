import { FunctionComponent, h } from 'preact';

import { Editor } from './Editor';
import { Grid } from './Grid';
import { Preview } from './Preview';

export const BuilderPage: FunctionComponent = () => (
  <Grid
    left={<Editor />}
    right={<Preview />}
  />
);
