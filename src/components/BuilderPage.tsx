import { h } from 'preact';

import { Editor } from './Editor';
import { Grid } from './Grid';
import { Preview } from './Preview';

export const BuilderPage = () => (
  <Grid
    left={<Editor />}
    right={<Preview />}
  />
);
