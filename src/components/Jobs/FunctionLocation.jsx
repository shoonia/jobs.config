import { h } from 'preact';

import st from './FunctionLocation.css';

function FunctionLocation({ data }) {
  return (
    <div>
      <div>
        <span className={st.prefix}>
          backend/
        </span>
        <label className={st.block}>
          <span className={st.title}>
            File Name
          </span>
          <input
            type="text"
            value={data.filename}
            data-id={data.id}
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
          <span className={st.title}>
            Function Name
          </span>
          <input
            type="text"
            value={data.funcname}
            data-id={data.id}
            className={st.funcInput}
            data-name="funcname"
            placeholder="function name"
            required
          />
        </label>
      </div>
      <input
        type="text"
        value={data.description}
        data-id={data.id}
        className={st.description}
        data-name="description"
        placeholder="description"
      />
    </div>
  );
}

export default FunctionLocation;
