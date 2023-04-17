declare global {
  interface Window {
    dataLayer: unknown[];
  }

  type FC<T = Record<string, unknown>> = import('preact').FunctionComponent<T>;
}

export {};
