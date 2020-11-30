type TValidResult = [
  hasError: boolean,
  message?: string,
];

const itemRequired = ['functionLocation', 'functionName', 'executionConfig'];
const itemAll = [...itemRequired, 'description'];
const executionConfigAll = ['cronExpression', 'time', 'dayOfWeek','dateOfMonth'];

const error = (message: string): TValidResult => [
  true,
  message,
];

const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
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
    const names = keys.filter((i) => i !== 'jobs').join(', ');

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
  }

  i = len;

  while (0 < i--) {
    const { executionConfig } = jobs[i];

    if (!isObject(executionConfig)) {
      return error(
        `Incorrect type of property "jobs[${i}].executionConfig". Expected "object".`,
      );
    }

    const [hasUnknown, unknownKey] = hasUnknownProps(executionConfig, executionConfigAll);

    if (hasUnknown) {
      return error(
        `Unknown property "${unknownKey}" in "jobs[${i}].executionConfig".\n\nAllowed one of "${executionConfigAll.join(separator)}"`,
      );
    }
  }

  return [false];
};
