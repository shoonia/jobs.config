import stripJsonComments from 'strip-json-comments';
import parseJson from 'parse-json';

type TJSONCResult = Readonly<[
  error: string | null,
  config?: Record<string, unknown>,
]>;

export const parseJSONC = (value: string): TJSONCResult => {
  try {
    const json = stripJsonComments(value);

    return [null, parseJson(json)];
  } catch (error) {
    return [String(error)];
  }
};
