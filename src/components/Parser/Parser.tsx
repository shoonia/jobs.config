import { h } from 'preact';

import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { Message } from './Message';
import { EditButton } from './EditButton';
import { IConfig } from '../../util/items';

export interface Props {
  value: string;
}

export const Parser = ({ value }: Props) => {
  if (value.trim() === '') {
    return (
      <Message>
        No input
      </Message>
    );
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
      <p>Valid jobs.config</p>
      <EditButton config={(config as IConfig)} />
    </Message>
  );
};
