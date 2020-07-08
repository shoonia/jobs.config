declare module '*.png' {
  const value: string;
  export = value;
}

declare module 'react-hint' {
  interface Option<H, C> {
    createElement: H;
    Component: C
  }

  function ReactHintFactory<H, C>(option: Option<H, C>): C;

  export = ReactHintFactory;
}
