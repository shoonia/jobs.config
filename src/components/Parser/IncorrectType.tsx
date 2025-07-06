import type { KEYS } from '../../constants';

interface Props {
  index: number;
  name: KEYS;
  expected: 'string' | 'number' | 'object';
}

export const IncorrectType: FC<Props> = ({ index, name, expected }) => (
  <>
    <p>{`Invalid "${name}" property type at "jobs[${index}]"`}</p>
    <p>{`The "${name}" property must be a ${expected}. Please check the value and ensure it matches the expected data type for job definitions.`}</p>
  </>
);
