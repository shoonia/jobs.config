import { h } from 'preact';

import s from './styles.css';
import { parseJSONC } from './util';

export interface Props {
  value: string;
}

export function Parser({ value }: Props) {
  const { isValid, message, info } = parseJSONC(value);

  if (!isValid) {
    return (
      <div className={s.message}>
        <code>
          {message}
        </code>
        <pre
          className={s.info}
          dangerouslySetInnerHTML={{ __html: info }}
        />
      </div>
    );
  }

  return (
    <div>Valid</div>
  );
}
