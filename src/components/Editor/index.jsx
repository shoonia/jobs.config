import { h, Fragment } from 'preact';
import { useCallback } from 'preact/hooks';
import useStoreon from 'storeon/preact';

import Jobs from '../Jobs';
import Button from '../Button';
import IconPlus from './IconPlus';
import s from './styles.css';

function Editor() {
  const { dispatch, items, isMax } = useStoreon('items', 'isMax');

  const createItem = useCallback(() => {
    dispatch('items/new');
  }, []);

  const removeItem = useCallback((event) => {
    dispatch('items/remove', event.target.value);
  }, []);

  const cloneItem = useCallback((event) => {
    dispatch('items/clone', event.target.value);
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
    <Fragment>
      <div className={s.section}>
        <span
          data-rh="You can configure up to 20 jobs."
          className={s.tooltip}
        >
          <Button
            onClick={createItem}
            disabled={isMax}
          >
            <IconPlus />
            &nbsp;New Job
          </Button>
        </span>
      </div>
      <Jobs
        items={items}
        remove={removeItem}
        clone={cloneItem}
        update={updateItem}
        isMax={isMax}
      />
    </Fragment>
  );
}

export default Editor;
