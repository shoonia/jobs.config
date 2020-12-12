import { h, Fragment, FunctionComponent } from 'preact';

import { Jobs } from '../Jobs';
import { CreateButton } from './CreateButton';

export const Editor: FunctionComponent = () =>  (
  <Fragment>
    <CreateButton />
    <Jobs />
  </Fragment>
);
