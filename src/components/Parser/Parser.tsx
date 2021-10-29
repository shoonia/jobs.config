import type { IConfig } from '../../util/items';
import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { VALIDATOR_VALUE_LIMIT } from '../../constants';
import { Message } from './Message';
import { EditButton } from './EditButton';

export interface Props {
  value: string;
}

export const Parser: FC<Props> = ({ value }) => {
  if (value.trim() === '') {
    return (
      <Message>
        No input
      </Message>
    );
  }

  if (value.length > VALIDATOR_VALUE_LIMIT) {
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

  const [hasError, ErrorComponent] = isValidConfig(config);

  if (hasError) {
    return (
      <Message error>
        {ErrorComponent}
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
