import { h } from 'preact';

import { createPath } from './util';
import st from './FunctionLocation.css';

function FunctionLocation({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const tree = createPath(target.value).reduceRight((acc, item, index) => {
    const listClass = index === 0 ? st.list : st.sublist;

    return (
      <ul className={listClass}>
        <li className={st.item}>
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
      className={st.bar}
      style={style}
    >
      <div className={st.root}>
        Backend
      </div>
      {tree}
    </div>
  );
}

export default FunctionLocation;
