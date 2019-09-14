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

  const updateItem = useCallback(({ target }) => {
    const { id, name } = target.dataset;

    dispatch('items/update', {
      id,
      name,
      value: target.value,
    });
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
        update={updateItem}
      />
    </div>
  );
}

export default Editor;
