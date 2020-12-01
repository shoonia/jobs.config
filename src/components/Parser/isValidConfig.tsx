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
      'Incorrect type. Expected "object".\n\nThe jobs.config file must contains a JSON object.',
    );
  }

  if (!('jobs' in config)) {
    return error(
      'Missing property "jobs".\n\nThe jobs object must contains one top-level key named "jobs".',
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== 'jobs').join(separator);

    return error(
      `Unknown property "${names}".\n\nThe jobs object must contains one top-level key named "jobs".`,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      'Incorrect type. Expected "array".\n\nThe top-level key "jobs" must be an array.',
    );
  }

  const { jobs } = config;
  const len = jobs.length;

  if (len > 20) {
    return error(
      `Too many scheduled jobs.\n\nYou can configure up to 20 jobs, exist ${len}`,
    );
  }

  if (len < 1) {
    return error(
      'No scheduled jobs.',
    );
  }

  if (!jobs.every(isObject)) {
    return error(
      'Incorrect type. Expected "object".\n\nThe "jobs" array must contain only objects, each of which represents a scheduled job.',
    );
  }

  let i = len;

  while (0 < i--) {
    const item = jobs[i];

    const [hasUnknown, unknownKey] = hasUnknownProps(item, itemAll);
    if (hasUnknown) {
      return error(
        `Unknown property "${unknownKey}" at "jobs[${i}]".\n\nAllowed one of "${itemAll.join(separator)}"`,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(item, itemRequired);
    if (hasMissing) {
      return error(
        `Missing property "${missingkey}" at "jobs[${i}]"\n\nEach scheduled job object must contain the required fields "${itemRequired.join(separator)}".`,
      );
    }

    const execConfig = item.executionConfig;

    if (!isObject(execConfig)) {
      return error(
        `Incorrect type of property "jobs[${i}].executionConfig". Expected "object".`,
      );
    }

    const [hasUnknown1, unknownKey1] = hasUnknownProps(execConfig, execConfigAll);
    if (hasUnknown1) {
      return error(
        `Unknown property "${unknownKey1}" in "jobs[${i}].executionConfig".\n\nAllowed one of "${execConfigAll.join(separator)}"`,
      );
    }

    if ('cronExpression' in execConfig) {
      const cronExp = execConfig.cronExpression;

      if (isString(cronExp)) {
        if (isInvalidCron(cronExp)) {
          return error(
            <>
              <div>{`Invalid "cronExpression" at "jobs[${i}].executionConfig"\n\n`}</div>
              <p>
                <CronTrue value={cronExp} setValidity={() => {/**/}} />
              </p>
              <hr/>
              <p>
                You can schedule your job to run at intervals as short as one hour apart, but not shorter.
                If you define your job to run more frequently, the job will be ignored.
              </p>
            </>,
          );
        }
      } else {
        return error(
          `Incorrect type of property "cronExpression" at "jobs[${i}].executionConfig". Expected "string".`,
        );
      }
    }
  }

  return [false];
};
