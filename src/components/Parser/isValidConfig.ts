type IParseResult = [
  isValid: boolean,
  message?: string,
];

const required = ['functionLocation', 'functionName', 'executionConfig'];

const error = (message: string): IParseResult => [
  false,
  message,
];

const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const hasUnknownProps = (item: Record<string, unknown>) => {
  for (const key of Object.keys(item)) {
    const notOne = !required.includes(key);

    if (notOne && key !== 'description') {
      return [true, key];
    }
  }

  return [false];
};

const hasMissingProps = (item: Record<string, unknown>) => {
  for (const key of required) {
    if (!(key in item)) {
      return [true, key];
    }
  }

  return [false];
};

export const isValidConfig = (config: unknown): IParseResult => {
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
      'Incorrect type. Expected "object"\n\nThe "jobs" array must contain only objects, each of which represents a scheduled job.',
    );
  }

  let i = len;

  while (0 < i--) {
    const [invalid, key] = hasUnknownProps(jobs[i]);

    if (invalid) {
      return error(
        `Unknown property "${key}" at "jobs[${i}].${key}"\n\nEach scheduled job object must contain only the "functionLocation", "functionName", "description" and "executionConfig"`,
      );
    }
  }

  i = len;

  while (0 < i--) {
    const [invalid, key] = hasMissingProps(jobs[i]);

    if (invalid) {
      return error(
        `Missing property "${key}" at "jobs[${i}]"\n\nEach scheduled job object must contain the "functionLocation", "functionName" and "executionConfig" required fields.`,
      );
    }
  }

  return [true];
};
