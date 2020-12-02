import { h } from 'preact';

interface Props {
  index: number;
  name: string;
  expected: string;
}

export function IncorrectType({ index, name, expected }: Props) {
  return (
    <p>
      {`Incorrect type of property "${name}" at "jobs[${index}]". Expected "${expected}".`}
    </p>
  );
}
