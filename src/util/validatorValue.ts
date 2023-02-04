import { KEY_VALIDATOR_VALUE } from '../constants';

export const getValidatorValue = (): string => {
  const params = new URLSearchParams(location.search);

  if (params.has(KEY_VALIDATOR_VALUE)) {
    try {
      return atob(params.get(KEY_VALIDATOR_VALUE) || '');
    } catch { /**/ }
  }

  return '';
};

export const createValidatorLink = (value: string): string | undefined => {
  const url = new URL(location.href);

  try {
    url.searchParams.set(KEY_VALIDATOR_VALUE, btoa(value));

    return url.href;
  } catch { /**/ }
};
