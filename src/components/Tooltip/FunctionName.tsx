import { FunctionComponent, h } from 'preact';

import s from './styles.css';
import c from '../../styles/code.css';
import { classNames } from '../../util/component';

interface Props {
  target: HTMLInputElement;
}

export const FunctionName: FunctionComponent<Props> = ({ target }) => {
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
          {'export function '}
        </span>
        <span className={fnClass}>
          {target.value}
        </span>
        {'() {'}
        <br />
        <span className={c.mtk3}>
          {'  // TODO:'}
        </span>
        <br />
        {'}'}
      </code>
    </div>
  );
};
