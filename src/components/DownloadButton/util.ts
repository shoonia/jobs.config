export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

export const saveFile = async (content: string): Promise<void> => {
  const options = {
    suggestedName: 'jobs.config',
    types: [
      {
        description: 'Jobs Config',
        accept: {
          'application/json': [
            '.config',
          ],
        },
      },
    ],
  };

  const file = await window.showSaveFilePicker(options);
  const state = await file.queryPermission();

  if (state === 'granted') {
    const writable = await file.createWritable();

    await writable.write(content);
    await writable.close();
  }
};
