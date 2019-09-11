import { h } from 'preact';

const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function DayOfWeek({ id, day, update }) {
  const name = `day-of-week-${id}`;

  const week = days.map((item) => (
    <label
      key={item}
    >
      <input
        type="radio"
        name={name}
        checked={day === item}
        data-name="dayOfWeek"
        data-id={id}
        value={item}
      />
      {item}
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
