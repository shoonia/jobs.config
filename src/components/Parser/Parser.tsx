import { h } from 'preact';

import s from './styles.css';
import { parseJSONC } from './parseJSONC';
import { parseConfig } from './parseConfig';
import { ErrorMessage } from './ErrorMessage';

export interface Props {
  value: string;
}

export function Parser({ value }: Props) {
  const { isValid, message, config } = parseJSONC(value);

  if (!isValid) {
    return (
      <ErrorMessage>
        {message}
      </ErrorMessage>
    );
  }

  const [validConfig, info] = parseConfig(config);

  if (!validConfig) {
    return (
      <ErrorMessage>
        {info}
      </ErrorMessage>
    );
  }

  return (
    <div className={s.message}>Valid</div>
  );
}
