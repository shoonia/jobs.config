import { h } from 'preact';

import st from './styles.css';

function FunctionLocation({ id, filename, funcname, description }) {
  return (
    <fieldset className={st.fields}>
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.text}>
            File Name
          </span>
          <input
            type="text"
            value={filename}
            data-id={id}
            className={st.funcInput}
            data-name="filename"
            placeholder="file name"
            required
          />
        </label>
        <span className={st.dot}>
          .
        </span>
        <label className={st.block}>
          <span className={st.text}>
            Function Name
          </span>
          <input
            type="text"
            value={funcname}
            data-id={id}
            className={st.funcInput}
            data-name="funcname"
            placeholder="function name"
            pattern="^[\w\s-]+$"
            required
          />
        </label>
      </div>
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.text}>
            Description
          </span>
          <input
            type="text"
            value={description}
            data-id={id}
            className={st.description}
            data-name="description"
            placeholder="description"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default FunctionLocation;
