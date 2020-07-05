export const isProd = document.location.hostname !== 'localhost';

/**
 * @param {Array<string | false>} list
 * @returns {string}
 */
export const classNames = (list) => list.filter(Boolean).join(' ');
