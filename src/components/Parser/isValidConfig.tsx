import type { ComponentChild } from 'preact';

import { IncorrectType } from './IncorrectType';
import { weekList } from '../../util/week';
import { reservedWords } from '../../util/reservedWords';
import { isValidFunctionLocation, isUTCTime, isValidFunctionName } from '../../util/validator';
import { isString } from '../../util/component';
import { KEYS, MAX_ITEMS } from '../../constants';
import { parseCron } from '../../util/parseCron';

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
  list: readonly string[],
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
  list: readonly string[],
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
        <p>Invalid file format</p>
        <p>The <strong>jobs.config</strong> file must contain a JSON object that defines the jobs you want to schedule.</p>
      </>,
    );
  }

  if (!(KEYS.jobs in config)) {
    return error(
      <>
        <p>Missing "jobs" property</p>
        <p>The <strong>jobs.config</strong> file must contain a "jobs" array that defines your scheduled jobs.</p>
      </>,
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== KEYS.jobs).join(separator);    return error(
      <>
        <p>{`Unknown property "${names}"`}</p>
        <p>The <strong>jobs.config</strong> file should only contain a single "jobs" property that defines your scheduled jobs.</p>
      </>,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      <>
        <p>Invalid "jobs" property type</p>
        <p>The "jobs" property must be an array where each job is represented by an object.</p>
      </>,
    );
  }

  const { jobs } = config;
  let i = jobs.length;

  if (i > MAX_ITEMS) {
    return error(
      <>
        <p>Too many scheduled jobs ({i})</p>
        <p>You can configure up to 20 jobs. Please reduce the number of jobs in your configuration.</p>
      </>,
    );
  }

  if (i < 1) {
    return error(
      <>
        <p>No scheduled jobs found</p>
        <p>The "jobs" array is empty. Please add at least one job definition to schedule.</p>
      </>,
    );
  }

  if (!jobs.every(isObject)) {
    return error(
      <>
        <p>Invalid job format</p>
        <p>Each job in the "jobs" array must be an object that represents a scheduled job definition.</p>
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
          <p>{`Valid job properties are: "${baseProps.join(separator)}"`}</p>
        </>,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(jobsItem, baseRequiredProps);

    if (hasMissing) {
      return error(
        <>
          <p>{`Missing property "${missingkey}" at "jobs[${i}]"`}</p>
          <p>{`Each job definition must contain the required properties: "${baseRequiredProps.join(separator)}"`}</p>
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
          <p>The function location must be a path to the backend file in which the job function resides. Use a relative path within the Backend folder for <strong>.js</strong> or <strong>.jsw</strong> files.</p>
          <p>File and folder names can contain only alphanumeric characters, periods, hyphens and underscores, and cannot begin or end with a period.</p>
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
          <p>{`The function name must be a valid JavaScript identifier. Unexpected ${message}.`}</p>
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
          <p>{`Valid execution config properties are: "${executionProps.join(separator)}"`}</p>
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
            <p>{`The time "${time}" is not valid. All times in job configurations must be UTC time in HH:MM format (24-hour format).`}</p>
          </>,
        );
      }
    } else {
      return error(
        <>
          <p>{`Missing execution time configuration at "jobs[${i}].executionConfig"`}</p>
          <p>The execution configuration must contain either a "time" property (with optional "dayOfWeek" or "dateInMonth") or a "cronExpression" property to define when the job runs.</p>
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
            <p>{`Invalid "dayOfWeek" value at "jobs[${i}].executionConfig"`}</p>
            <p>{`The value "${dayOfWeek}" is not recognized. Valid day names are: "${weekList.join(separator)}"`}</p>
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
            <p>{`Invalid "dateInMonth" value at "jobs[${i}].executionConfig"`}</p>
            <p>The date in month must be a number between 1 and 31 representing the day of the month when the job should run.</p>
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
          <p>{`Conflicting execution configuration at "jobs[${i}].executionConfig"`}</p>
          <p>{`When using a cron expression, you cannot use the "${periodProps.join(separator)}" properties. These are mutually exclusive ways to define when the job runs.`}</p>
          <p>
            <em>
              Use either a cron expression OR the time property with optional dayOfWeek/dateInMonth properties, but not both.
            </em>
          </p>
        </>,
      );
    }

    if (dateProps.every((i) => i in executionConfig)) {
      return error(
        <>
          <p>{`Conflicting execution configuration at "jobs[${i}].executionConfig"`}</p>
          <p>You cannot use both "dateInMonth" and "dayOfWeek" properties together. Choose either a specific date in the month OR a specific day of the week.</p>
        </>,
      );
    }
  }

  return [false];
};
