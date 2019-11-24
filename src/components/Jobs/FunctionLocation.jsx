import { h } from 'preact';

import st from './styles.css';

function FunctionLocation({
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
            pattern="^[a-zA-Z_\$][\w\d\$]*$"
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

export default FunctionLocation;
