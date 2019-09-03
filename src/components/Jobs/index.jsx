import { h } from 'preact';

import Item from './Item';

function Jobs({ items }) {
  const list = items.map((item) => (
    <Item key={item.id} />
  ));

  return (
    <li>
      {list}
    </li>
  );
}

export default Jobs;
