import type { ComponentChild } from 'preact';
import s from './FunctionLocation.css';
import { createPath } from './util';

interface Props {
  target: HTMLInputElement;
}

export const FunctionLocation: FC<Props> = ({ target }) => {
  const tree = createPath(target.value).reduceRight<ComponentChild>((acc, item, index) => (
    <ul className={index === 0 ? s.list : s.sublist}>
      <li>
        <div className={item.className}>
          {item.path}
        </div>
        {acc}
      </li>
    </ul>
  ), null);

  return (
    <div
      className={s.bar}
      style={`min-width:${target.offsetWidth}px`}
    >
      <div className={s.root}>
        Backend
      </div>
      {tree}
    </div>
  );
};
