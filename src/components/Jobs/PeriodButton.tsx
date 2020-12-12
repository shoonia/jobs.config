import { FunctionComponent, h } from 'preact';

import s from './styles.css';
import { PERIOD } from '../../constants';

interface Props {
  name: string;
  value: PERIOD;
  period: PERIOD;
}

const handlerClick = ({ key, target }: KeyboardEvent) => {
  if (key === 'Enter' || key === ' ') {
    const node = ((target as HTMLLabelElement).firstChild as HTMLInputElement);

    node.click();
  }
};

export const PeriodButton: FunctionComponent<Props> = ({ name, value, period }) => {
  const isChecked = value === period;

  return (
    <label
      className={s.label}
      tabIndex={isChecked ? -1 : 0}
      onKeyPress={handlerClick}
    >
      <input
        type="radio"
        name={name}
        checked={isChecked}
        data-name="period"
        value={value}
        className={s.period}
      />
      <span className={s.title}>
        {value}
      </span>
    </label>
  );
};
