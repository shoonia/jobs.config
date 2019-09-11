import { h } from 'preact';

import st from './styles.css';
import Period from './Period';
import DayOfWeek from './DayOfWeek';

function Item({ data, remove, clone, update }) {
  return (
    <li className={st.item}>
      <fieldset
        className={st.fields}
        onInput={update}
      >
        <input
          type="text"
          value={data.filename}
          data-id={data.id}
          data-name="filename"
          placeholder="file name"
        />
        <input
          type="text"
          value={data.funcname}
          data-id={data.id}
          data-name="funcname"
          placeholder="function name"
        />
        <input
          type="text"
          value={data.description}
          data-id={data.id}
          data-name="description"
          placeholder="description"
        />
        <input
          type="time"
          data-name="time"
          data-id={data.id}
          value={data.time}
          placeholder="00:00"
        />
      </fieldset>
      <Period
        id={data.id}
        dateEnable={data.dateEnable}
        update={update}
      />
      <DayOfWeek
        id={data.id}
        day={data.dayOfWeek}
        update={update}
      />
      <div className={st.buttons}>
        <button
          value={data.id}
          onClick={remove}
        >
          x
        </button>
        <button
          value={data.id}
          onClick={clone}
        >
          clone
        </button>
      </div>
    </li>
  );
}

export default Item;
