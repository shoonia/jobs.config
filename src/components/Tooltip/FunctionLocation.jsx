import { h } from 'preact';
import cn from 'classnames';

import st from './FunctionLocation.css';

function icon(acc, path) {
  if (acc !== null) return st.dir;
  if (/\.js$/.test(path)) return st.js;
  if (/\.jsw$/.test(path)) return st.jsw;

  return st.blank;
}

function FunctionLocation({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const location = target.value.replace(/^\//, '');
  const path = location.split('/');

  const tree = path.reduceRight((acc, item, index) => {
    const list = (index === 0) ? st.list : st.sublist;

    return (
      <ul className={list}>
        <li>
          <div className={cn(st.node, icon(acc, item))}>
            {item}
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
