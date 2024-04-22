import type { ComponentChild as CC } from 'preact';
import s from './FunctionLocation.css';
import { createPath } from './util';
import { useStoreon } from '../../../store';

interface Props {
  target: HTMLInputElement;
}

export const FunctionLocation: FC<Props> = ({ target }) => {
  useStoreon('items');

  const tree = createPath(target.value).reduceRight<CC>((acc, item, index): CC => (
    <ul className={index < 1 ? s.list : s.sublist}>
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
