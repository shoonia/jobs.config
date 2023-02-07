import { isString } from '../../util/component';

export const readFile = (files: FileList | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (files?.length) {
      const reader = new FileReader();

      reader.onload = () => {
        if (isString(reader.result)) {
          resolve(reader.result);
        } else {
          reject();
        }
      };

      reader.onerror = reject;
      reader.readAsText(files[0]);
    } else {
      reject();
    }
  });
};
