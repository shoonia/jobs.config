import s from './styles.css';
import type { PERIOD } from '../../constants';

interface Props {
  name: string;
  value: PERIOD;
  period: PERIOD;
}

const handlerClick = (event: KeyboardEvent): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    const el = event.target as HTMLElement;

    if (el.firstChild instanceof HTMLElement) {
      el.firstChild.click();
    }
  }
};

export const PeriodButton: FC<Props> = ({ name, value, period }) => {
  const isChecked = value === period;

  return (
    <label
      className={s.label}
      tabIndex={0}
      onKeyPress={handlerClick}
      aria-checked={isChecked}
      role="checkbox"
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
