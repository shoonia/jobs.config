import { h } from 'preact';
import { useEffect, useCallback } from 'preact/hooks';
import useStoreon from 'storeon/preact';

import Jobs from '../Jobs';
import { MAX_ITEMS } from '../../constants';
import st from './styles.css';
import Button from '../Button';
import Icon from '../Icon';

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
      <div className={st.section}>
        <Button
          onClick={createItem}
          disabled={items.length >= MAX_ITEMS}
        >
          <Icon name="add" /> New
        </Button>
      </div>
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
