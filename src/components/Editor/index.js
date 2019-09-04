import { h } from 'preact';
import { useEffect, useCallback } from 'preact/hooks';
import useStoreon from 'storeon/preact';

import Jobs from '../Jobs';

function Editor() {
  const { dispatch, items } = useStoreon('items');

  useEffect(() => {
    dispatch('items/new');
  }, []);

  const createItem = useCallback(() => {
    dispatch('items/new');
  }, []);

  const removeItem = useCallback(({ target }) => {
    dispatch('items/remove', target.value);
  }, []);

  const cloneItem = useCallback(({ target }) => {
    dispatch('items/clone', target.value);
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={createItem}
      >
        + New
      </button>
      <Jobs
        items={items}
        remove={removeItem}
        clone={cloneItem}
      />
    </div>
  );
}

export default Editor;
