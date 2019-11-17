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
            value={functionLocation}
            data-id={id}
            className={st.funcInput}
            data-name="functionLocation"
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
            value={functionName}
            data-id={id}
            className={st.funcInput}
            data-name="functionName"
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
