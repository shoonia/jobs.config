import type { KEYS } from '../../constants';

interface Props {
  index: number;
  name: KEYS;
  expected: 'string' | 'number' | 'object';
}

export const IncorrectType: FC<Props> = ({ index, name, expected }) => (
  <p>
    {`Incorrect type of property "${name}" at "jobs[${index}]". Expected "${expected}".`}
  </p>
);
