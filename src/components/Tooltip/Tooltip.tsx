import { h, Component, createRef, type ComponentClass } from 'preact';
import { useCallback } from 'preact/hooks';
import HintFactory, { type ReactHintProps } from 'react-hint';

import s from './styles.css';
import { useStoreon } from '../../store';
import { KEYS } from '../../constants';
import { FunctionName } from './FunctionName';
import { FunctionLocation } from './FunctionLocation';
import { CronExamplesTooltip } from './CronExamplesTooltip';
import cronExamples from './CronExamplesTooltip/cronExamples.json';

// @ts-expect-error @typescript-eslint/ban-ts-comment
const Hint: ComponentClass<ReactHintProps> = HintFactory({ createElement: h, Component, createRef });
const delay = {
  show: 500,
  hide: 100,
} as const;

const dataList = cronExamples.map((i) => (
  <option key={i.value} value={i.value}>
    {i.label}
  </option>
));

export const Tooltips: FC = () => {
  const { items } = useStoreon('items');

  const onRenderContent = useCallback((target: HTMLInputElement) => {
    switch (target.dataset.name) {
      case KEYS.functionLocation: {
        return (
          <FunctionLocation target={target} />
        );
      }
      case KEYS.functionName: {
        return (
          <FunctionName target={target} />
        );
      }
      case KEYS.cronExpression: {
        return (
          <CronExamplesTooltip target={target} />
        );
      }
    }
    return null;
  }, [items]);

  return (
    <>
      <Hint events delay={delay} />
      <Hint
        persist
        attribute="data-fl"
        events={{
          focus: true,
          click: true,
          hover: false,
        }}
        className={s.fs}
        // @ts-expect-error @typescript-eslint/ban-ts-comment
        onRenderContent={onRenderContent}
      />
      <datalist id="cron-examples">
        {dataList}
      </datalist>
    </>
  );
};
