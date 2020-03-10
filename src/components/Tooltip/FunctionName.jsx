import { h } from 'preact';

import s from './styles.css';
import c from '../../code.css';
import { classNames } from '../../util/component';

function FunctionName({ target }) {
  const style = {
    minWidth: target.offsetWidth,
  };

  const opClass = classNames([
    c.mtk4,
    !target.value && c.err,
  ]);

  const fnClass = classNames([
    c.func,
    !target.validity.valid && c.err,
  ]);

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
