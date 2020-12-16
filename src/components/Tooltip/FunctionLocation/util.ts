import s from './FunctionLocation.css';
import { classNames } from '../../../util/component';
import { isInvalidPath } from '../../../util/validator';

const iconClass = (path: string, isLast: boolean): string => {
  if (!isLast) return s.dir;
  if (/\.js$/.test(path)) return s.js;
  if (/\.jsw$/.test(path)) return s.jsw;

  return s.blank;
};

export const createPath = (location: string) => {
  return location
    .replace(/^\//, '')
    .split('/')
    .map((path, index, array) => {
      const isLast = (index === array.length - 1);

      const className = classNames([
        s.node,
        iconClass(path, isLast),
        isInvalidPath(path, isLast) && s.invalid,
      ]);

      return {
        path,
        className,
      };
    });
};
