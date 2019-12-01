import cn from 'classnames';
import st from './FunctionLocation.css';

function hasError(path, isLast) {
  const DOT_CHAR_CODE = 46;

  return path === ''
   || /[^\w\d\.-]/.test(path) // eslint-disable-line no-useless-escape
   || path.charCodeAt(0) === DOT_CHAR_CODE
   || path.charCodeAt(path.length - 1) === DOT_CHAR_CODE
   || (isLast && !/[^\.]\.jsw?$/.test(path)); // eslint-disable-line no-useless-escape
}

function iconClass(path, isLast) {
  if (!isLast) return st.dir;
  if (/\.js$/.test(path)) return st.js;
  if (/\.jsw$/.test(path)) return st.jsw;

  return st.blank;
}

export function createPath(location) {
  return location
    .replace(/^\//, '')
    .split('/')
    .map((path, index, array) => {
      const isLast = (index === array.length - 1);

      const className = cn(st.node, iconClass(path, isLast), {
        [st.invalid]: hasError(path, isLast),
      });

      return {
        path,
        className,
      };
    });
}
