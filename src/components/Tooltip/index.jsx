import { h, Component, Fragment } from 'preact';
import { useCallback } from 'preact/hooks';
import HintFactory from 'react-hint';
import { useStoreon } from 'storeon/preact';
import 'react-hint/css/index.css';

import FunctionName from './FunctionName';
import FunctionLocation from './FunctionLocation';
import s from './styles.css';

const Hint = HintFactory({ createElement: h, Component });

function Tooltips() {
  const { items } = useStoreon('items');

  const onRenderContent = useCallback((target) => {
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
    <Fragment>
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
    </Fragment>
  );
}

export default Tooltips;
