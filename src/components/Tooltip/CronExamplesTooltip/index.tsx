import type { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import cronExamples from './cronExamples.json';
import type { TEvents, TState } from '../../../store';
import { KEYS } from '../../../constants';
import { classNames } from '../../../util/component';

interface Props {
  target: HTMLElement;
}

export const CronExamplesTooltip: FunctionComponent<Props> = ({ target }) => {
  const { items, dispatch } = useStoreon<TState, TEvents>('items');

  const { id } = target.dataset;
  const { cronExpression } = items.find((i) => i.id === id) || {};

  const onClick: EventListener = (event) => {
    if (event.target instanceof HTMLButtonElement) {
      dispatch('items/update', {
        id: id || '',
        name: KEYS.cronExpression,
        value: event.target.value,
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
        <button
          type="button"
          value={i.value}
          title={i.value}
          className={buttonClassName}
        >
          {i.label}
        </button>
      </li>
    );
  });

  return (
    <ul
      className={s.list}
      onClick={onClick}
    >
      {list}
      <li className={s.item}>
        <a
          href="https://github.com/shoonia/jobs.config/discussions/15"
          className={s.link}
          target="_blank"
          rel="noreferrer"
        >
          You can request an example
        </a>
      </li>
    </ul>
  );
};
