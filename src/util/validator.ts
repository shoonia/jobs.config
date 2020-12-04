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
const LOCAL_PATH = /^(\/)[\w\-./]*[\w-]\.jsw?$/;
const UTC = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const isValidFunctionName = (name: string) => {
  if (FUNCTION_NAME.test(name)) {
    return !reservedWords.some((i) => i === name);
  }

  return false;
};

export const isUTCTime = (val: string) => {
  return isString(val) && UTC.test(val);
};

export const isLocationPath = (val: string) => {
  return LOCAL_PATH.test(val);
};
