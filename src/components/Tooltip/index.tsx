import { Component, createRef, type ComponentClass } from 'preact';
import type { ReactHintProps } from 'react-hint';
// @ts-expect-error @typescript-eslint/ban-ts-comment
import HintFactory from 'react-hint/src';

import s from './styles.css';
import { KEYS } from '../../constants';
import { FunctionName } from './FunctionName';
import { FunctionLocation } from './FunctionLocation';
import { CronExamplesTooltip } from './CronExamplesTooltip';
import cronExamples from './CronExamplesTooltip/cronExamples.json';

const Hint: ComponentClass<ReactHintProps> = HintFactory({ Component, createRef });

const delay: ReactHintProps['delay'] = {
  show: 500,
  hide: 100,
};

const events: ReactHintProps['events'] = {
  focus: true,
  click: true,
  hover: false,
};

const onRenderContent = ((target: HTMLInputElement) => {
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
}) as unknown as ReactHintProps['onRenderContent'];

export const Tooltips: FC = () =>
  <>
    <Hint events delay={delay} />
    <Hint
      persist
      attribute="data-fl"
      events={events}
      className={s.fs}
      onRenderContent={onRenderContent}
    />
    <datalist id="cron-examples">
      {cronExamples.map((i) =>
        <option key={i.value} value={i.value}>
          {i.label}
        </option>,
      )}
    </datalist>
  </>;
