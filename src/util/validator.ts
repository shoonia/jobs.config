import { isString } from './component';

const reservedWords = <const>[
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'super',
  'switch',
  'static',
  'this',
  'throw',
  'try',
  'True',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
];

const FUNCTION_NAME = /^[$a-z_][\da-z_$]*$/i;
const UTC = /^([01]\d|2[0-3]):([0-5]\d)$/;
const PATH = /[^\w\d.-]/;
const FILE_NAME = /[^.]\.jsw?$/;

export const isValidFunctionName = (name: string) => {
  if (FUNCTION_NAME.test(name)) {
    return !reservedWords.some((i) => i === name);
  }

  return false;
};

export const isUTCTime = (val: unknown): val is string => {
  return isString(val) && UTC.test(val);
};

export const isInvalidPath = (path: string, isLast: boolean): boolean => {
  const DOT_CHAR_CODE = 46; // .

  return path === ''
    || PATH.test(path)
    || path.charCodeAt(0) === DOT_CHAR_CODE
    || path.charCodeAt(path.length - 1) === DOT_CHAR_CODE
    || isLast && !FILE_NAME.test(path);
};

export const isValidFunctionLocation = (val: string) => {
  const SLASH_CHAR_CODE = 47; // /

  return isString(val)
    && val.charCodeAt(0) === SLASH_CHAR_CODE
    && val.split('/').every((path, index, list) => {
      const isLast = (index === list.length - 1);

      return index === 0 || !isInvalidPath(path, isLast);
    });
};
