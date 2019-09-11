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
          checked={dateEnable === 'Daily'}
          data-id={id}
          data-name="dateEnable"
          value="Daily"
        />
        Daily
      </label>
      <label>
        <input
          type="radio"
          name={name}
          checked={dateEnable === 'Weekly'}
          data-id={id}
          data-name="dateEnable"
          value="Weekly"
        />
        Weekly
      </label>
      <label>
        <input
          type="radio"
          name={name}
          checked={dateEnable === 'Monthly'}
          data-id={id}
          data-name="dateEnable"
          value="Monthly"
        />
        Monthly
      </label>
    </fieldset>
  );
}

export default Period;
