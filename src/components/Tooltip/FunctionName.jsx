import { h } from 'preact';
import cn from 'classnames';

import st from './FunctionName.css';

function FunctionName({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const opClass = cn(st.op, {
    [st.err]: !target.value,
  });

  const fnClass = cn(st.fn, {
    [st.err]: !target.validity.valid,
  });

  return (
    <div
      className={st.code}
      style={style}
    >
      <div className={st.field}>
        <code className={opClass}>
          export function&nbsp;
        </code>
        <code className={fnClass}>
          {target.value}
        </code>
        {'() {'}
        <br />
        <code className={st.cm}>
          &nbsp;&nbsp;// TODO:
        </code>
        <br />
        {'}'}
      </div>
    </div>
  );
}

export default FunctionName;
