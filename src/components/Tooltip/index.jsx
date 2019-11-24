import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';
import HintFactory from 'react-hint';
import useStoreon from 'storeon/preact';
import 'react-hint/css/index.css';

import FunctionName from './FunctionName';
import st from './styles.css';

export const Hint = HintFactory({ createElement: h, Component });

export function Tooltip() {
  return (
    <Hint events delay="500" />
  );
}

export function TooltipFunctionLocation() {
  const { items } = useStoreon('items');

  const onRenderContent = useCallback((target) => {
    const { name } = target.dataset;

    if (name === 'functionLocation') {
      return (
        <div />
      );
    }

    return (
      <FunctionName target={target} />
    );
  }, [items]);

  return (
    <Hint
      persist
      attribute="data-fl"
      events={{ focus: true }}
      className={st.fs}
      onRenderContent={onRenderContent}
    />
  );
}
