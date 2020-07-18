import { h, Fragment } from 'preact';

import { Jobs } from '../Jobs';
import { CreateButton } from './CreateButton';

export function Editor() {
  return (
    <Fragment>
      <CreateButton />
      <Jobs />
    </Fragment>
  );
}
