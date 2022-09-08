const serialize = (ops: Record<string, string>) => {
  const data: string[] = [];

  for (const key in ops) {
    data.push(`${key}=${encodeURIComponent(ops[key])}`);
  }

  return data.join('&');
};

export const sendBeacon = (): void => {
  const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const cid = cookie !== '' ? cookie : crypto.randomUUID();

  try {
    navigator.sendBeacon('https://www.google-analytics.com/collect',
      serialize({
        v: '1',
        ds: 'web',
        tid: 'UA-128241641-3',
        cid,
        t: 'pageview',
        dr: document.referrer,
        dt: document.title,
        dl: location.origin + location.pathname,
        ul: navigator.language.toLowerCase(),
        sr: screen.width + 'x' + screen.height,
        vp: visualViewport?.width + 'x' + visualViewport?.height,
      }),
    );
  } catch { /**/ }

  document.cookie = `cid=${cid};domain=shoonia.github.io;path=/;max-age=${(60 * 60 * 24 * 365)}`;
};
