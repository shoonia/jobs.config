import { h } from 'preact';

import st from './styles.css';

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
          name="filename"
          placeholder="file name"
        />
        <input
          type="text"
          value={data.funcname}
          data-id={data.id}
          name="funcname"
          placeholder="function name"
        />
        <input
          type="text"
          value={data.description}
          data-id={data.id}
          name="description"
          placeholder="description"
        />
        <input
          type="time"
          name="time"
          data-id={data.id}
          value={data.time}
          placeholder="00:00"
        />
      </fieldset>
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
