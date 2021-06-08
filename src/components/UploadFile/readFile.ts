import { isString } from '../../util/component';

export const readFile = (target: EventTarget | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (
      (target instanceof HTMLInputElement)
      && (target.files?.length === 1)
    ) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (isString(reader.result)) {
          resolve(reader.result);
        } else {
          reject();
        }
      };

      reader.onerror = reject;
      reader.readAsText(file);
    } else {
      reject();
    }
  });
};
