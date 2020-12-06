import { h } from 'preact';

import { KEYS } from '../../constants';

interface Props {
  index: number;
  name: KEYS;
  expected: 'string' | 'number' | 'object';
}

export const IncorrectType = ({ index, name, expected }: Props) => (
  <p>
    {`Incorrect type of property "${name}" at "jobs[${index}]". Expected "${expected}".`}
  </p>
);
