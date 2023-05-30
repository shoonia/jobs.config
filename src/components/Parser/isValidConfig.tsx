import type { ComponentChild } from 'preact';

import { IncorrectType } from './IncorrectType';
import { weekList } from '../../util/week';
import { reservedWords } from '../../util/reservedWords';
import { isValidFunctionLocation, isUTCTime, isValidFunctionName } from '../../util/validator';
import { isString } from '../../util/component';
import { KEYS, MAX_ITEMS } from '../../constants';
import { parseCron } from '../CronTrue/parseCron';

type TValidResult = [
  hasError: boolean,
  message?: ComponentChild,
];

const baseRequiredProps = [
  KEYS.functionLocation,
  KEYS.functionName,
  KEYS.executionConfig,
] as const;
const baseProps = [
  ...baseRequiredProps,
  KEYS.description,
] as const;
const dateProps = [
  KEYS.dayOfWeek,
  KEYS.dateInMonth,
] as const;
const periodProps = [
  ...dateProps,
  KEYS.time,
] as const;
const executionProps = [
  ...periodProps,
  KEYS.cronExpression,
] as const;

const isInteger = (val: unknown): val is number => {
  return Number.isInteger(val);
};

const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const error = (message: ComponentChild): TValidResult => [
  true,
  message,
];

const hasUnknownProps = (
  item: Record<string, unknown>,
  list: readonly string[]
): TValidResult => {
  for (const key in item) {
    const notOne = !list.includes(key);

    if (notOne) {
      return [true, key];
    }
  }

  return [false];
};

const hasMissingProps = (
  item: Record<string, unknown>,
  list: readonly string[]
): TValidResult => {
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
        <p>{'Incorrect type. Expected "object"'}</p>
        <p>{'The jobs.config file must contains a JSON object'}</p>
      </>,
    );
  }

  if (!(KEYS.jobs in config)) {
    return error(
      <>
        <p>{'Missing property "jobs"'}</p>
        <p>{'The jobs object must contains one top-level key named "jobs"'}</p>
      </>,
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== KEYS.jobs).join(separator);

    return error(
      <>
        <p>{`Unknown property "${names}"`}</p>
        <p>{'The jobs object must contains one top-level key named "jobs"'}</p>
      </>,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "array"'}</p>
        <p>{'The top-level key "jobs" must be an array'}</p>
      </>,
    );
  }

  const { jobs } = config;
  let i = jobs.length;

  if (i > MAX_ITEMS) {
    return error(
      <>
        <p>{`Too many scheduled jobs. (${i})`}</p>
        <p>You can configure up to 20 jobs</p>
      </>,
    );
  }

  if (i < 1) {
    return error(<p>No scheduled jobs</p>);
  }

  if (!jobs.every(isObject)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "object"'}</p>
        <p>{'The "jobs" array must contain only objects, each of which represents a scheduled job'}</p>
      </>,
    );
  }

  while (0 < i--) {
    const jobsItem = jobs[i];

    const [hasUnknown, unknownKey] = hasUnknownProps(jobsItem, baseProps);

    if (hasUnknown) {
      return error(
        <>
          <p>{`Unknown property "${unknownKey}" at "jobs[${i}]"`}</p>
          <p>{`Allowed one of "${baseProps.join(separator)}"`}</p>
        </>,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(jobsItem, baseRequiredProps);

    if (hasMissing) {
      return error(
        <>
          <p>{`Missing property "${missingkey}" at "jobs[${i}]"`}</p>
          <p>{`Each scheduled job object must contain the required fields "${baseRequiredProps.join(separator)}"`}</p>
        </>,
      );
    }

    if (KEYS.description in jobsItem) {
      if (!isString(jobsItem.description)) {
        return error(
          <IncorrectType index={i} name={KEYS.description} expected="string" />,
        );
      }
    }

    const { functionLocation } = jobsItem;

    if (!isString(functionLocation)) {
      return error(
        <IncorrectType index={i} name={KEYS.functionLocation} expected="string" />,
      );
    }

    if (!isValidFunctionLocation(functionLocation)) {
      return error(
        <>
          <p>{`Invalid "functionLocation" at "jobs[${i}]"`}</p>
          <p>The function location is a relative path within the Backend folder for <code>.js</code> or <code>.jsw</code> file.</p>
          <p>File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period</p>
        </>,
      );
    }

    const { functionName } = jobsItem;

    if (!isString(functionName)) {
      return error(
        <IncorrectType index={i} name={KEYS.functionName} expected="string" />,
      );
    }

    if (!isValidFunctionName(functionName)) {
      const message = reservedWords.has(functionName)
        ? `reserved word "${functionName}"`
        : `token "${functionName}"`;

      return error(
        <>
          <p>{`Invalid "functionName" at "jobs[${i}]"`}</p>
          <p>{`Error: Unexpected ${message}`}</p>
        </>,
      );
    }

    const { executionConfig } = jobsItem;

    if (!isObject(executionConfig)) {
      return error(
        <IncorrectType index={i} name={KEYS.executionConfig} expected="object" />,
      );
    }

    const [hasUnknownEx, unknownKeyEx] = hasUnknownProps(executionConfig, executionProps);

    if (hasUnknownEx) {
      return error(
        <>
          <p>{`Unknown property "${unknownKeyEx}" in "jobs[${i}].executionConfig"`}</p>
          <p>{`Allowed one of "${executionProps.join(separator)}"`}</p>
        </>,
      );
    }

    if (KEYS.cronExpression in executionConfig) {
      const { cronExpression } = executionConfig;

      if (!isString(cronExpression)) {
        return error(
          <IncorrectType index={i} name={KEYS.cronExpression} expected="string" />,
        );
      }

      const [isError, message] = parseCron(cronExpression);

      if (isError) {
        return error(
          <>
            <p>{`Invalid "cronExpression" at "jobs[${i}].executionConfig"`}</p>
            <p>{message}</p>
          </>,
        );
      }
    } else if (KEYS.time in executionConfig) {
      const { time } = executionConfig;

      if (!isString(time)) {
        return error(
          <IncorrectType index={i} name={KEYS.time} expected="string" />,
        );
      }

      if (!isUTCTime(time)) {
        return error(
          <>
            <p>{`Invalid "time" at "jobs[${i}].executionConfig"`}</p>
            <p>{`Error: "${time}". The time is specified as UTC time in HH:MM format`}</p>
          </>,
        );
      }
    } else {
      return error(
        <>
          <p>{`Missing the time of the job runs at "jobs[${i}].executionConfig"`}</p>
          <p>{'The "executionConfig" object must contain one of "time", "cronExpression" properties'}</p>
        </>,
      );
    }

    if (KEYS.dayOfWeek in executionConfig) {
      const { dayOfWeek } = executionConfig;

      if (!isString(dayOfWeek)) {
        return error(
          <IncorrectType index={i} name={KEYS.dayOfWeek} expected="string" />,
        );
      }

      if (!weekList.some((i) => i === dayOfWeek)) {
        return error(
          <>
            <p>{`Incorrect value of "dayOfWeek" at "jobs[${i}].executionConfig"`}</p>
            <p>{`Error: unknown value "${dayOfWeek}". Allowed one of "${weekList.join(separator)}"`}</p>
          </>,
        );
      }
    }

    if (KEYS.dateInMonth in executionConfig) {
      const { dateInMonth } = executionConfig;

      if (!isInteger(dateInMonth)) {
        return error(
          <IncorrectType index={i} name={KEYS.dateInMonth} expected="number" />,
        );
      }

      if (dateInMonth < 1 || dateInMonth > 31) {
        return error(
          <>
            <p>{`Invalid "dateInMonth" at "jobs[${i}].executionConfig"`}</p>
            <p>{'The value of the "dateInMonth" property must be a number between 1 and 31'}</p>
          </>,
        );
      }
    }

    if (
      (KEYS.cronExpression in executionConfig) &&
      (periodProps.some((i) => i in executionConfig))
    ) {
      return error(
        <>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig"`}</p>
          <p>{`Error: "cronExpression" omit all of "${periodProps.join(separator)}" properties`}</p>
          <p>
            <em>
              {'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression'}
            </em>
          </p>
        </>,
      );
    }

    if (dateProps.every((i) => i in executionConfig)) {
      return error(
        <>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig"`}</p>
          <p>{'Error: "dateInMonth" omit the "dayOfWeek" property'}</p>
        </>,
      );
    }
  }

  return [false];
};
