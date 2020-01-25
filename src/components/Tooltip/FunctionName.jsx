import { h } from 'preact';
import cn from 'classnames';

import s from './styles.css';
import c from '../../code.css';

function FunctionName({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const opClass = cn(c.mtk4, {
    [c.err]: !target.value,
  });

  const fnClass = cn(c.func, {
    [c.err]: !target.validity.valid,
  });

  return (
    <div
      className={s.editor}
      style={style}
    >
      <code className={s.field}>
        <span className={opClass}>
          export function&nbsp;
        </span>
        <span className={fnClass}>
          {target.value}
        </span>
        {'() {'}
        <br />
        <span className={c.mtk3}>
          &nbsp;&nbsp;// TODO:
        </span>
        <br />
        {'}'}
      </code>
    </div>
  );
}

export default FunctionName;
