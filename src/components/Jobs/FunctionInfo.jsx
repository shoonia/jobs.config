import { h } from 'preact';

import s from './styles.css';

function FunctionInfo({
  id,
  functionLocation,
  functionName,
  description,
}) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            Function Location
          </span>
          <input
            type="text"
            data-id={id}
            data-name="functionLocation"
            data-fl
            data-fl-at="bottom"
            className={s.funcInput}
            value={functionLocation}
            placeholder="Function Location"
            pattern="^(\/)?[\w\-\.\/]*[\w-]\.jsw?$"
            required
          />
        </label>
        <span className={s.slash}>
          /
        </span>
        <label className={s.block}>
          <span className={s.text}>
            Function Name
          </span>
          <input
            type="text"
            data-id={id}
            data-name="functionName"
            data-fl
            data-fl-at="bottom"
            className={s.funcInput}
            value={functionName}
            placeholder="Function Name"
            pattern="^(\s)*?[\$a-zA-Z_][\$\w]*(\s)*?$"
            required
          />
        </label>
      </div>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            Description
          </span>
          <input
            type="text"
            value={description}
            data-id={id}
            className={s.description}
            data-name="description"
            placeholder="Description"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default FunctionInfo;
