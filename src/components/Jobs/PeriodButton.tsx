import type { JSX } from 'preact';

import s from './styles.css';
import type { PERIOD } from '../../constants';

interface Props {
  name: string;
  value: PERIOD;
  period: PERIOD;
}

const handlerClick: JSX.KeyboardEventHandler<HTMLLabelElement> = (event): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    const el = event.currentTarget;

    if (el.firstChild instanceof HTMLElement) {
      el.firstChild.click();
    }
  }
};

export const PeriodButton: FC<Props> = ({ name, value, period }) => (
  <label
    className={s.label}
    tabIndex={0}
    onKeyDown={handlerClick}
  >
    <input
      type="radio"
      name={name}
      checked={value === period}
      data-name="period"
      value={value}
      className={s.period}
    />
    <span className={s.title}>
      {value}
    </span>
  </label>
);
