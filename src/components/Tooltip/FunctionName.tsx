import s from './styles.css';
import c from '../../styles/code.css';
import { classNames } from '../../util/component';

interface Props {
  target: HTMLInputElement;
}

export const FunctionName: FC<Props> = ({ target }) => {
  const opClass = classNames([
    c.mtk4,
    !target.value && c.err,
  ]);

  const fnClass = classNames([
    c.mtk10,
    !target.validity.valid && c.err,
  ]);

  return (
    <div
      className={s.editor}
      style={`min-width:${target.offsetWidth}px`}
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
