import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Button } from '../../Button';
import { cronExamples } from '../../../util/cronExamples';

interface Props {
  target: HTMLElement;
}

export const CronExamplesTooltip: FunctionComponent<Props> = () => {
  const list = cronExamples.map((i) => (
    <li key={i.value}>
      <Button
        blank
        value={i.value}
        title={i.value}
      >
        {i.label}
      </Button>
    </li>
  ));

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
};
