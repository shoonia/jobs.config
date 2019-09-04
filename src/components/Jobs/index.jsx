import { h } from 'preact';

import Item from './Item';

function Jobs({ items, remove, clone }) {
  const list = items.map((item) => (
    <Item
      key={item.id}
      data={item}
      remove={remove}
      clone={clone}
    />
  ));

  return (
    <ul>
      {list}
    </ul>
  );
}

export default Jobs;
