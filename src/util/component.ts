export const classNames = (list: (string | false)[]): string => {
  return list.filter(Boolean).join(' ');
};

export const preventDefault = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};
