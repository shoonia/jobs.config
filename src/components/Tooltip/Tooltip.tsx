import { h, Component, createRef, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import HintFactory from 'react-hint';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { FunctionName } from './FunctionName';
import { FunctionLocation } from './FunctionLocation';
import { TState } from '../../store';

const Hint = HintFactory({ createElement: h, Component, createRef });

export const Tooltips: FunctionComponent = () => {
  const { items } = useStoreon<TState>('items');

  const onRenderContent = useCallback((target: HTMLInputElement) => {
    const { name } = target.dataset;

    switch (name) {
      case 'functionLocation': {
        return (
          <FunctionLocation target={target} />
        );
      }
      case 'functionName': {
        return (
          <FunctionName target={target} />
        );
      }
    }
    return null;
  }, [items]);

  return (
    <>
      <Hint events delay="500" />
      <Hint
        persist
        attribute="data-fl"
        events={{
          focus: true,
          click: true,
        }}
        className={s.fs}
        onRenderContent={onRenderContent}
      />
    </>
  );
};
