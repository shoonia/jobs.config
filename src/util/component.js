export const isProd = document.location.hostname !== 'localhost';

export const classNames = (list) => list.filter(Boolean).join(' ');
