import type { JSX } from 'preact';

import s from './styles.css';
import cronExamples from './cronExamples.json';
import { useItemsStore } from '../../../store/useItemsStore';
import { KEYS } from '../../../constants';
import { classNames } from '../../../util/component';
import { BlankButton } from '../../Button';

interface Props {
  target: HTMLElement;
}

export const CronExamplesTooltip: FC<Props> = ({ target }) => {
  const { items, update } = useItemsStore();

  const id = target.dataset.id || '';
  const { cronExpression } = items.find((i) => i.id === id) || {};

  const onClick: JSX.MouseEventHandler<HTMLButtonElement> = (event) =>
    update({
      id,
      name: KEYS.cronExpression,
      value: event.currentTarget.value,
    });

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
          onClick={onClick}
        >
          {i.label}
        </BlankButton>
      </li>
    );
  });

  return (
    <ul className={s.list}>
      {list}
      <li className={s.item}>
        <a
          href="https://github.com/shoonia/jobs.config/discussions/15"
          className={s.link}
          target="_blank"
          rel="noreferrer"
          tabIndex={0}
        >
          You can request an example
        </a>
      </li>
    </ul>
  );
};
