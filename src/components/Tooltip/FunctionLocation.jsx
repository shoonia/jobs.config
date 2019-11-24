import { h } from 'preact';

import st from './FunctionLocation.css';

function FunctionLocation({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const location = target.value.replace(/^\//, '');
  const path = location.split('/');

  const tree = path.reduceRight((acc, item) => {
    return (
      <ul className={st.list}>
        <li className={st.item}>
          <div className={st.node}>
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
        ˅&nbsp;&nbsp;Backend
      </div>
      {tree}
    </div>
  );
}

export default FunctionLocation;
