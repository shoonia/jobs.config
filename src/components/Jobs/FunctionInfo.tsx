import s from './styles.css';
import { KEYS } from '../../constants';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';

export const FunctionInfo: FC = () => {
  const {
    functionLocation,
    functionName,
    description,
  } = useFormScope();

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="Function Location">
          <input
            type="text"
            data-name={KEYS.functionLocation}
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
            data-name={KEYS.functionName}
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
            data-name={KEYS.description}
            placeholder="Description"
          />
        </Label>
      </div>
    </fieldset>
  );
};
