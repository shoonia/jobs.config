import stripJsonComments from 'strip-json-comments';
import parseJson from 'parse-json';

export const parseJSONC = (value: string) => {
  try {
    const json = stripJsonComments(value);

    return [null, parseJson(json)] as const;
  } catch (error) {
    return [String(error)] as const;
  }
};
