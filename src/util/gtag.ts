window.dataLayer ??= [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gtag(a: string, b: unknown): void {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}
