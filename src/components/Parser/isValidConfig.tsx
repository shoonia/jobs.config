import { ComponentChildren, h, Fragment } from 'preact';
import { isValidCron } from 'cron-validator';

import { CronTrue } from '../CronTrue';

type TValidResult = [
  hasError: boolean,
  message?: ComponentChildren,
];

const itemRequired = ['functionLocation', 'functionName', 'executionConfig'];
const itemAll = [...itemRequired, 'description'];
const execConfigAll = ['cronExpression', 'time', 'dayOfWeek','dateOfMonth'];

const error = (message: ComponentChildren): TValidResult => [
  true,
  message,
];

const isInvalidCron = (val: string) => {
  return !isValidCron(val, { seconds: false });
};

const isUTCTime = (val: string) => {
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
};

const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

const hasUnknownProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of Object.keys(item)) {
    const notOne = !list.includes(key);

    if (notOne) {
      return [true, key];
    }
  }

  return [false];
};

const hasMissingProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of list) {
    if (!(key in item)) {
      return [true, key];
    }
  }

  return [false];
};

export const isValidConfig = (config: unknown): TValidResult => {
  const separator = '", "';

  if (!isObject(config)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "object".'}</p>
        <p>{'The jobs.config file must contains a JSON object.'}</p>
      </>,
    );
  }

  if (!('jobs' in config)) {
    return error(
      <>
        <p>{'Missing property "jobs".'}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </>,
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== 'jobs').join(separator);

    return error(
      <>
        <p>{`Unknown property "${names}".`}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </>,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "array".'}</p>
        <p>{'The top-level key "jobs" must be an array.'}</p>
      </>,
    );
  }

  const { jobs } = config;
  const len = jobs.length;

  if (len > 20) {
    return error(
      <>
        <p>{`Too many scheduled jobs. (${len})`}</p>
        <p>You can configure up to 20 jobs.</p>
      </>,
    );
  }

  if (len < 1) {
    return error(
      <p>No scheduled jobs.</p>,
    );
  }

  if (!jobs.every(isObject)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "object."'}</p>
        <p>{'The "jobs" array must contain only objects, each of which represents a scheduled job.'}</p>
      </>,
    );
  }

  let i = len;

  while (0 < i--) {
    const item = jobs[i];

    const [hasUnknown, unknownKey] = hasUnknownProps(item, itemAll);
    if (hasUnknown) {
      return error(
        <>
          <p>{`Unknown property "${unknownKey}" at "jobs[${i}]".`}</p>
          <p>{`Allowed one of "${itemAll.join(separator)}"`}</p>
        </>,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(item, itemRequired);
    if (hasMissing) {
      return error(
        <>
          <p>{`Missing property "${missingkey}" at "jobs[${i}]"`}</p>
          <p>{`Each scheduled job object must contain the required fields "${itemRequired.join(separator)}".`}</p>
        </>,
      );
    }

    if ('description' in item) {
      if (!isString(item.description)) {
        return error(
          <p>{`Incorrect type of property "description" at "jobs[${i}]". Expected "string".`}</p>,
        );
      }
    }

    const execConfig = item.executionConfig;

    if (!isObject(execConfig)) {
      return error(
        <p>{`Incorrect type of property "executionConfig" at "jobs[${i}]". Expected "object".`}</p>,
      );
    }

    const [hasUnknown1, unknownKey1] = hasUnknownProps(execConfig, execConfigAll);
    if (hasUnknown1) {
      return error(
        <>
          <p>{`Unknown property "${unknownKey1}" in "jobs[${i}].executionConfig".`}</p>
          <p>{`Allowed one of "${execConfigAll.join(separator)}"`}</p>
        </>,
      );
    }

    if ('cronExpression' in execConfig) {
      const cronExp = execConfig.cronExpression;

      if (isString(cronExp)) {
        if (isInvalidCron(cronExp)) {
          return error(
            <>
              <p>
                {`Invalid "cronExpression" at "jobs[${i}].executionConfig"\n\n`}
              </p>
              <p>
                <CronTrue value={cronExp} setValidity={() => {/**/}} />
              </p>
              <p>
                <em>
                  You can schedule your job to run at intervals as short as one hour apart, but not shorter.
                  If you define your job to run more frequently, the job will be ignored.
                </em>
              </p>
            </>,
          );
        }
      } else {
        return error(
          <p>{`Incorrect type of property "cronExpression" at "jobs[${i}].executionConfig". Expected "string".`}</p>,
        );
      }
    } else if ('time' in execConfig) {
      const time = execConfig.time;

      if (!isString(time)) {
        return error(
          <p>{`Incorrect type of property "time" at "jobs[${i}].executionConfig". Expected "string".`}</p>,
        );
      }

      if (!isUTCTime(time)) {
        return error(
          <>
            <p>{`Invalid "time" at "jobs[${i}].executionConfig".`}</p>
            <p>{`Error: "${time}". The time is specified as UTC time in HH:MM format.`}</p>
          </>,
        );
      }

    } else {
      return error(
        <>
          <p>{`Missing the time of the job runs at "jobs[${i}].executionConfig".`}</p>
          <p>{'The "executionConfig" object must contain one of the properties "time", "cronExpression".'}</p>
        </>,
      );
    }
  }

  return [false];
};
