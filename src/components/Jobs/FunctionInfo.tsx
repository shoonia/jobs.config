import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  functionLocation: string;
  functionName: string;
  description: string;
}

export const FunctionInfo: FunctionComponent<Props> = ({
  functionLocation,
  functionName,
  description,
}) => (
  <fieldset className={s.fields}>
    <div className={s.location}>
      <Label top="Function Location">
        <input
          type="text"
          data-name="functionLocation"
          data-fl
          data-fl-at="bottom"
          className={s.func_input}
          value={functionLocation}
          placeholder="Function Location"
          pattern="^(\/)?[\w\-\.\/]*[\w-]\.jsw?$"
          spellcheck={false}
          required
        />
      </Label>
      <span className={s.slash}>
        /
      </span>
      <Label top="Function Name">
        <input
          type="text"
          data-name="functionName"
          data-fl
          data-fl-at="bottom"
          className={s.func_input}
          value={functionName}
          placeholder="Function Name"
          pattern="^(\s)*?[\$a-zA-Z_][\$\w]*(\s)*?$"
          spellcheck={false}
          required
        />
      </Label>
    </div>
    <div className={s.location}>
      <Label top="Description">
        <input
          type="text"
          value={description}
          className={s.description}
          data-name="description"
          placeholder="Description"
        />
      </Label>
    </div>
  </fieldset>
);
