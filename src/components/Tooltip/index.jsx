import { h, Component } from 'preact';
import HintFactory from 'react-hint';
import 'react-hint/css/index.css';

export const Hint = HintFactory({ createElement: h, Component });

export function Tooltip() {
  return (
    <Hint events delay="500" />
  );
}
