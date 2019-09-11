import { h } from 'preact';

const days = [
  {
    label: 'All',
    value: '',
  },
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

function DayOfWeek({ id, day, update }) {
  const name = `day-of-week-${id}`;

  const week = days.map((item) => (
    <label
      key={item.label}
    >
      <input
        type="radio"
        name={name}
        checked={day === item.value}
        data-name="dayOfWeek"
        data-id={id}
        value={item.value}
      />
      {item.label}
    </label>
  ));

  return (
    <fieldset
      onChange={update}
    >
      {week}
    </fieldset>
  );
}

export default DayOfWeek;
