import { h } from 'preact';

import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';

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

  const [validConfig, info] = isValidConfig(config);

  if (!validConfig) {
    return (
      <ErrorMessage>
        {info}
      </ErrorMessage>
    );
  }

  return (
    <SuccessMessage>
      Valid jobs.config
    </SuccessMessage>
  );
}
