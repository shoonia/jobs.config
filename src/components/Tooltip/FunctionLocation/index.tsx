import { h, Fragment, FunctionComponent } from 'preact';

import s from './FunctionLocation.css';
import { createPath } from './util';

interface Props {
  target: HTMLInputElement;
}

export const FunctionLocation: FunctionComponent<Props> = ({ target }) => {
  const style = {
    minWidth: target.offsetWidth,
  };

  const tree = createPath(target.value).reduceRight((acc, item, index) => {
    const listClass = index === 0 ? s.list : s.sublist;

    return (
      <ul className={listClass}>
        <li>
          <div className={item.className}>
            {item.path}
          </div>
          {acc}
        </li>
      </ul>
    );
  }, <Fragment />);

  return (
    <div
      className={s.bar}
      style={style}
    >
      <div className={s.root}>
        Backend Files
      </div>
      {tree}
    </div>
  );
};
