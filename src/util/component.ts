export const isProd = document.location.hostname !== 'localhost';

export const classNames = (list: Array<string | false>): string => {
  return list.filter(Boolean).join(' ');
};

export const preventDefault = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};
