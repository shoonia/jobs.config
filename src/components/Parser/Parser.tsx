import type { IConfig } from '../../util/items';
import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { VALIDATOR_VALUE_LIMIT } from '../../constants';
import { Message } from './Message';
import { EditButton } from './EditButton';

interface Props {
  value: string;
}

export const Parser: FC<Props> = ({ value }) => {
  if (value.trim() === '') {
    return (
      <Message>
        <p>No content to validate</p>
        <p>Please enter your <strong>jobs.config</strong> content to validate the scheduled job configuration.</p>
      </Message>
    );
  }

  if (value.length > VALIDATOR_VALUE_LIMIT) {
    return (
      <Message error>
        <p>File too large to validate</p>
        <p>The <strong>jobs.config</strong> file content exceeds the maximum size limit for validation. Please reduce the file size and try again.</p>
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
      <p>Valid <strong>jobs.config</strong> file</p>
      <EditButton config={(config as IConfig)} />
    </Message>
  );
};
