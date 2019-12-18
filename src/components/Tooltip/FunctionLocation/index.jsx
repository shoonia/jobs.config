import { h } from 'preact';

import { createPath } from './util';
import s from './FunctionLocation.css';

function FunctionLocation({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const tree = createPath(target.value).reduceRight((acc, item, index) => {
    const listClass = index === 0 ? s.list : s.sublist;

    return (
      <ul className={listClass}>
        <li className={s.item}>
          <div className={item.className}>
            {item.path}
          </div>
          {acc}
        </li>
      </ul>
    );
  }, null);

  return (
    <div
      className={s.bar}
      style={style}
    >
      <div className={s.root}>
        Backend
      </div>
      {tree}
    </div>
  );
}

export default FunctionLocation;
