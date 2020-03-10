export const classNames = (list) => list.filter(Boolean).join(' ');

export const nanoid = () => {
  let size = 16;
  let id = '';

  while(size--) {
    id += (36 * Math.random() | 0).toString(36);
  }

  return id;
};
