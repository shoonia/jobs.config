declare global {
  type FC<T = Record<string, unknown>> = import('preact').FunctionComponent<T>;
}

export {};
