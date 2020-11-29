import { h } from 'preact';

import s from './styles.css';
import { parseJSONC } from './parseJSONC';

export interface Props {
  value: string;
}

export function Parser({ value }: Props) {
  const { isValid, message, config } = parseJSONC(value);

  if (!isValid) {
    return (
      <div className={s.message}>
        <pre className={s.error}>
          {message}
        </pre>
      </div>
    );
  }

  console.log(config);

  return (
    <div className={s.message}>Valid</div>
  );
}
