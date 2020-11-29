type IParseResult = [
  isValid: boolean,
  message?: string,
];

const error = (message: string): IParseResult => [
  false,
  message,
];

const isObject = (val: unknown): val is Record<string, unknown> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

export const parseConfig = (config: unknown): IParseResult => {
  if (!isObject(config)) {
    return error(
      'Incorrect type. Expected "object".\n\nThe jobs.config file must contains a JSON object.',
    );
  }

  // TODO: check config unknown property

  if (!('jobs' in config)) {
    return error(
      'Missing property "jobs".\n\nThe jobs object must contains one top-level key named "jobs".',
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      'Incorrect type. Expected "array".\n\nThe top-level key "jobs" must be an array.',
    );
  }

  // TODO: jobs length < 1
  // TODO: jobs length > 20

  return [true];
};
