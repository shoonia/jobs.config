import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import cronExamples from './cronExamples.json';
import type { IState, IEvents } from '../../../store';
import { KEYS } from '../../../constants';
import { classNames } from '../../../util/component';
import { BlankButton } from '../../Button';

interface Props {
  target: HTMLElement;
}

export const CronExamplesTooltip: FC<Props> = ({ target }) => {
  const { items, dispatch } = useStoreon<IState, IEvents>('items');

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
    const classList = classNames([
      s.btn,
      cronExpression === i.value && s.active,
    ]);

    return (
      <li
        key={i.value}
        className={s.item}
      >
        <BlankButton
          value={i.value}
          title={i.value}
          className={classList}
        >
          {i.label}
        </BlankButton>
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
