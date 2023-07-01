export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

export const saveFile = async (content: string): Promise<void> => {
  const file = await window.showSaveFilePicker({
    suggestedName: 'jobs.config',
  });

  const writable = await file.createWritable();

  await writable.write(content);
  await writable.close();
};
