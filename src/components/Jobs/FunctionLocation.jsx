import { h, Fragment } from 'preact';

import st from './FunctionLocation.css';

function FunctionLocation({ data }) {
  return (
    <Fragment>
      <div className={st.location}>
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
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.title}>
            Description
          </span>
          <input
            type="text"
            value={data.description}
            data-id={data.id}
            className={st.description}
            data-name="description"
            placeholder="description"
          />
        </label>
      </div>
    </Fragment>
  );
}

export default FunctionLocation;
