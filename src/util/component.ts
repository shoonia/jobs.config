export const classNames = (list: (string | false)[]): string => {
  return list.filter(Boolean).join(' ');
};

export const preventDefault = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export const isNumber = (val: unknown): val is number => {
  return typeof val === 'number';
};

export const isHTMLElement = (val: unknown): val is HTMLElement => {
  return val instanceof HTMLElement;
};
