import s from './styles.css';
import { KEYS } from '../../constants';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';
import { type TValidator, isValidFunctionLocation, isValidFunctionName } from '../../util/validator';

const validatorListener = (validator: TValidator): EventListener => {
  return (event) => {
    const el = event.target as HTMLInputElement;
    const value = el.value.trim();

    if (el.value !== value) {
      el.value = value;
    }

    el.setCustomValidity(validator(value) ? '' : 'error');
  };
};

export const validatorFunctionName = validatorListener(isValidFunctionName);
export const validatorFunctionLocation = validatorListener(isValidFunctionLocation);

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
            onInput={validatorFunctionLocation}
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
            onInput={validatorFunctionName}
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
