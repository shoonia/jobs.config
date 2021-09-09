import { isString } from './component';

const FUNCTION_NAME = /^[$a-z_][\da-z_$]*$/i;
const UTC = /^([01]\d|2[0-3]):([0-5]\d)$/;
const PATH = /[^\w\d.-]/;
const FILE_NAME = /[^.]\.jsw?$/;

export const isValidFunctionName = (name: string): boolean => {
  return FUNCTION_NAME.test(name);
};

export const isUTCTime = (val: unknown): val is string => {
  return isString(val) && UTC.test(val);
};

export const isInvalidPath = (path: string, isLast: boolean): boolean => {
  const DOT = '.';

  return path === ''
    || PATH.test(path)
    || path[0] === DOT
    || path[path.length - 1] === DOT
    || isLast && !FILE_NAME.test(path);
};

const isValidPath = (path: string, index: number, list: string[]): boolean => {
  const isLast = (index === list.length - 1);

  return index === 0 || !isInvalidPath(path, isLast);
};

export const isValidFunctionLocation = (val: string): boolean => {
  const SLASH = '/';

  return isString(val)
    && val[0] === SLASH
    && val.split(SLASH).every(isValidPath);
};
