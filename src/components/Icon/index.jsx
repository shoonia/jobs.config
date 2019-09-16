import { h } from 'preact';
import classNames from 'classnames/bind';

import st from './styles.css';

const cn = classNames.bind(st);

function Icon({ name }) {
  return (
    <span
      className={cn(name)}
      role="presentation"
    />
  );
}

export default Icon;
