import { h, Fragment } from 'preact';

import { Jobs } from '../Jobs';
import { CreateButton } from './CreateButton';

export const Editor = () =>  (
  <Fragment>
    <CreateButton />
    <Jobs />
  </Fragment>
);
