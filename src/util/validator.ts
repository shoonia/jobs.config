import { isString } from './component';
import { reservedWords } from './reservedWords';

export type TValidator = (val: string) => boolean;

const FUNCTION_NAME = /^[$a-z_][\da-z_$]*$/i;
const UTC = /^([01]\d|2[0-3]):([0-5]\d)$/;
const INVALID_PATH_CHARS = /[^\w\d.-]/;
const FILE_EXT = /\.jsw?$/;

export const isValidFunctionName: TValidator = (name) => {
  return FUNCTION_NAME.test(name) && !reservedWords.has(name);
};

export const isUTCTime = (val?: string): val is string => {
  return isString(val) && UTC.test(val);
};

export const isInvalidPath = (path: string, isLast: boolean): boolean => {
  return path === ''
    || INVALID_PATH_CHARS.test(path)
    || path.startsWith('.')
    || path.endsWith('.')
    || isLast && !FILE_EXT.test(path);
};

const isValidPath = (path: string, index: number, list: string[]): boolean => {
  const isLast = (index === list.length - 1);

  return index < 1 || !isInvalidPath(path, isLast);
};

export const isValidFunctionLocation: TValidator = (val) => {
  return isString(val)
    && val.startsWith('/')
    && val.split('/').every(isValidPath);
};
