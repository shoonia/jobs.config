import { FunctionComponent } from 'preact';

import { Jobs } from '../Jobs';
import { CreateButton } from './CreateButton';

export const Editor: FunctionComponent = () =>  (
  <>
    <CreateButton />
    <Jobs />
  </>
);
