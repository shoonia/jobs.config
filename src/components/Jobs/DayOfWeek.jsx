import { h } from 'preact';

import st from './styles.css';
import { WEEKLY } from '../../constants';

const days = [
  {
    label: 'Mon.',
    value: 'Monday',
  },
  {
    label: 'Tue.',
    value: 'Tuesday',
  },
  {
    label: 'Wed.',
    value: 'Wednesday',
  },
  {
    label: 'Thu.',
    value: 'Thursday',
  },
  {
    label: 'Fri.',
    value: 'Friday',
  },
  {
    label: 'Sat.',
    value: 'Saturday',
  },
  {
    label: 'Sun.',
    value: 'Sunday',
  },
];

function DayOfWeek({ id, day, period, update }) {
  const name = `day-of-week-${id}`;

  const week = days.map((item) => (
    <label
      key={item.label}
      className={st.label}
    >
      <input
        type="radio"
        name={name}
        checked={day === item.value}
        data-name="dayOfWeek"
        data-id={id}
        value={item.value}
        className={st.checkbox}
      />
      <span className={st.title}>
        {item.label}
      </span>
    </label>
  ));

  return (
    <fieldset
      onChange={update}
      className={st.fields}
      hidden={period !== WEEKLY}
    >
      {week}
    </fieldset>
  );
}

export default DayOfWeek;
