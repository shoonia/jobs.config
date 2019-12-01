import { h } from 'preact';

import st from './styles.css';

function FunctionInfo({
  id,
  functionLocation,
  functionName,
  description,
}) {
  return (
    <fieldset className={st.fields}>
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.text}>
            Function Location
          </span>
          <input
            type="text"
            data-id={id}
            data-name="functionLocation"
            data-fl
            data-fl-at="bottom"
            className={st.funcInput}
            value={functionLocation}
            placeholder="Function Location"
            pattern="^(\/)?[\w\d\-\.\/]*[\w\d-]\.jsw?$"
            required
          />
        </label>
        <span className={st.slash}>
          /
        </span>
        <label className={st.block}>
          <span className={st.text}>
            Function Name
          </span>
          <input
            type="text"
            data-id={id}
            data-name="functionName"
            data-fl
            data-fl-at="bottom"
            className={st.funcInput}
            value={functionName}
            placeholder="Function Name"
            pattern="^(\s)*?[\w\$][\w\d\$]*(\s)*?$"
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
            placeholder="Description"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default FunctionInfo;
