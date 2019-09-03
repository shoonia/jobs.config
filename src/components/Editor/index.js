import { h } from 'preact';
import useStoreon from 'storeon/preact';

import Jobs from '../Jobs';

function Editor() {
  const { /* dispatch, */ items } = useStoreon('items');

  return (
    <div>
      <Jobs
        items={items}
      />
    </div>
  );
}

export default Editor;
