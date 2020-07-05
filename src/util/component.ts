export const isProd = document.location.hostname !== 'localhost';

export const classNames = (list: Array<string | false>): string => {
  return list.filter(Boolean).join(' ');
};
