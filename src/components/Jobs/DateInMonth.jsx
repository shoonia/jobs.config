import { h } from 'preact';

function DateInMonth({ id, date, update }) {
  return (
    <fieldset>
      <input
        type="number"
        min="1"
        max="31"
        step="1"
        value={date}
        data-id={id}
        data-name="dateInMonth"
        onInput={update}
      />
    </fieldset>
  );
}

export default DateInMonth;
