import { h } from 'preact';

import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { Message } from './Message';

export interface Props {
  value: string;
}

export function Parser({ value }: Props) {
  if (value === '') {
    return null;
  }

  if (value.length > 15000) {
    return (
      <Message error>
        The file size is too large for the jobs.config.
      </Message>
    );
  }

  const [error, config] = parseJSONC(value);

  if (error !== null) {
    return (
      <Message error>
        {error}
      </Message>
    );
  }

  const [hasError, Error] = isValidConfig(config);

  if (hasError) {
    return (
      <Message error>
        {Error}
      </Message>
    );
  }

  return (
    <Message>
      Valid jobs.config
    </Message>
  );
}
