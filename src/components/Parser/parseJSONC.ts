import stripJsonComments from 'strip-json-comments';
import parseJson from 'parse-json';

interface TJSONCResult {
  isValid: boolean;
  message?: string;
  config?: Record<string, unknown>;
}

export const parseJSONC = (value: string): TJSONCResult => {
  if (value === '') {
    return { isValid: false };
  }

  try {
    const json = stripJsonComments(value);

    return {
      isValid: true,
      config: parseJson(json),
    };
  } catch (error) {
    return {
      isValid: false,
      message: String(error),
    };
  }
};
