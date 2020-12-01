import { h, ComponentChildren } from 'preact';
import stripJsonComments from 'strip-json-comments';
import parseJson from 'parse-json';

type TJSONCResult = Readonly<[
  isValid: boolean,
  message?: ComponentChildren,
  config?: Record<string, unknown>,
]>;

export const parseJSONC = (value: string): TJSONCResult => {
  if (value === '') {
    return [false];
  }

  if (value.length > 20000) {
    return [
      false,
      <p key="1">The file size is too large for the jobs.config.</p>,
    ];
  }

  try {
    const json = stripJsonComments(value);

    return [
      true,
      null,
      parseJson(json),
    ];
  } catch (error) {
    return [
      false,
      String(error),
    ];
  }
};
