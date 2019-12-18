import { h } from 'preact';
import cn from 'classnames';

import s from './FunctionName.css';

function FunctionName({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const opClass = cn(s.op, {
    [s.err]: !target.value,
  });

  const fnClass = cn(s.fn, {
    [s.err]: !target.validity.valid,
  });

  return (
    <div
      className={s.code}
      style={style}
    >
      <div className={s.field}>
        <code className={opClass}>
          export function&nbsp;
        </code>
        <code className={fnClass}>
          {target.value}
        </code>
        {'() {'}
        <br />
        <code className={s.cm}>
          &nbsp;&nbsp;// TODO:
        </code>
        <br />
        {'}'}
      </div>
    </div>
  );
}

export default FunctionName;
