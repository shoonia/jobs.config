import { h } from 'preact';

function Period({ id, dateEnable, update }) {
  const name = `period-${id}`;

  return (
    <fieldset
      onChange={update}
    >
      <label>
        <input
          type="radio"
          name={name}
          checked={dateEnable === '0'}
          data-id={id}
          data-name="dateEnable"
          value="0"
        />
        Week
      </label>
      <label>
        <input
          type="radio"
          name={name}
          checked={dateEnable === '1'}
          data-id={id}
          data-name="dateEnable"
          value="1"
        />
        Month
      </label>
    </fieldset>
  );
}

export default Period;
