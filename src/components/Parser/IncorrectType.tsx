import { h } from 'preact';

import { KEYS } from '../../constants';

interface Props {
  index: number;
  name: KEYS;
  expected: 'string' | 'number' | 'object';
}

export function IncorrectType({ index, name, expected }: Props) {
  return (
    <p>
      {`Incorrect type of property "${name}" at "jobs[${index}]". Expected "${expected}".`}
    </p>
  );
}
