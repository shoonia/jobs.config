import stripJsonComments from 'strip-json-comments';

interface TJSONCResult {
  isValid: boolean;
  message?: string;
  info?: string;
}

const escapeHTML = (value: string) => {
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

const getInfo = (message: string, value: string) => {
  const result = /(?:at\sposition)\s(\d+)/.exec(message);

  if (Array.isArray(result)) {
    const i = parseInt(result[1], 10);

    if (isNaN(i)) {
      return;
    }

    const char = value[i];
    const head = value.slice((i < 25 ? 0 : i - 25), i);
    const tail = value.slice((i + 1), (i + 25));

    return `${escapeHTML(head)}<mark>${escapeHTML(char)}</mark>${escapeHTML(tail)}`;
  }
};

export const parseJSONC = (value: string): TJSONCResult => {
  if (value === '') {
    return { isValid: false };
  }

  const json = stripJsonComments(value);

  try {
    JSON.parse(json);

    return { isValid: true };
  } catch (error) {
    const message = String(error);

    return {
      isValid: false,
      message,
      info: getInfo(message, json),
    };
  }
};
