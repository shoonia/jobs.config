import { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { KEYS } from '../../../constants';
import { Button } from '../../Button';
import { TEvents, TState } from '../../../store';
import { cronExamples } from '../../../util/cronExamples';
import { classNames } from '../../../util/component';

interface Props {
  target: HTMLElement;
}

export const CronExamplesTooltip: FunctionComponent<Props> = ({ target }) => {
  const { items, dispatch } = useStoreon<TState, TEvents>('items');

  const { id } = target.dataset;
  const { cronExpression } = items.find((i) => i.id === id) || {};

  const onClick = (ev: MouseEvent): void => {
    if (ev.target instanceof HTMLButtonElement) {
      dispatch('items/update', {
        id: id || '',
        name: KEYS.cronExpression,
        value: ev.target.value,
      });
    }
  };

  const list = cronExamples.map((i) => {
    const buttonClassName = classNames([
      s.btn,
      cronExpression === i.value && s.active,
    ]);

    return (
      <li
        key={i.value}
        className={s.item}
      >
        <Button
          blank
          value={i.value}
          title={i.value}
          className={buttonClassName}
        >
          {i.label}
        </Button>
      </li>
    );
  });

  return (
    <ul
      className={s.list}
      onClick={onClick}
    >
      {list}
    </ul>
  );
};
