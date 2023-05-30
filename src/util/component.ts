export const classNames = (list: (string | false | undefined)[]): string => {
  return list.filter(Boolean).join(' ');
};

export const preventDefault = (event: Event): void => {
  event.preventDefault();
  event.stopPropagation();
};

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};
