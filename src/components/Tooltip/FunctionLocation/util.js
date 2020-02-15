import s from './FunctionLocation.css';
import { classNames } from '../../../util';

function hasError(path, isLast) {
  const DOT_CHAR_CODE = 46;

  return path === ''
    || /[^\w\d\.-]/.test(path) // eslint-disable-line no-useless-escape
    || path.charCodeAt(0) === DOT_CHAR_CODE
    || path.charCodeAt(path.length - 1) === DOT_CHAR_CODE
    || (isLast && !/[^\.]\.jsw?$/.test(path)); // eslint-disable-line no-useless-escape
}

function iconClass(path, isLast) {
  if (!isLast) return s.dir;
  if (/\.js$/.test(path)) return s.js;
  if (/\.jsw$/.test(path)) return s.jsw;

  return s.blank;
}

export function createPath(location) {
  return location
    .replace(/^\//, '')
    .split('/')
    .map((path, index, array) => {
      const isLast = (index === array.length - 1);

      const className = classNames([
        s.node,
        iconClass(path, isLast),
        hasError(path, isLast) && s.invalid,
      ]);

      return {
        path,
        className,
      };
    });
}
