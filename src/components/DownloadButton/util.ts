export const isSupportFilePicker = typeof showSaveFilePicker === 'function';

export const saveFile = async (content: string): Promise<void> => {
  const file = await showSaveFilePicker({
    suggestedName: 'jobs.config',
    startIn: 'desktop',
  });

  const writable = await file.createWritable();

  await writable.write(content);
  await writable.close();
};
