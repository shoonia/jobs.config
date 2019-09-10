import { h } from 'preact';

function Period({ id, flag, update }) {
  const name = `period-${id}`;
  return (
    <div
    >
      <label>
        <input
          type="radio"
          name={name}
          checked={flag === '0'}
          data-id={id}
          data-name="dateEnable"
          value="0"
          onChange={update}

        />
        Week
      </label>
      <label>
        <input
          type="radio"
          name={name}
          checked={flag === '1'}
          data-id={id}
          data-name="dateEnable"
          value="1"
          onChange={update}

        />
        Month
      </label>
    </div>
  );
}

export default Period;
