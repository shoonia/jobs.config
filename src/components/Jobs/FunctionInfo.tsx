import s from './styles.css';
import { KEYS } from '../../constants';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';
import { useValidator } from '../../hooks/useValidator';
import { isValidFunctionLocation, isValidFunctionName } from '../../util/validator';

const localTransformer = (val: string) => {
  const trimmed = val.trim();
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

const nameTransformer = (val: string) => val.trim();

export const FunctionInfo: FC = () => {
  const locationRef = useValidator(isValidFunctionLocation, localTransformer);
  const nameRef = useValidator(isValidFunctionName, nameTransformer);
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
            ref={locationRef}
            type="text"
            data-name={KEYS.functionLocation}
            data-fl
            data-fl-at="bottom"
            className={s.func_input}
            value={functionLocation}
            placeholder="Function Location"
            spellcheck={false}
            required
          />
        </Label>
        <span className={s.slash}>
          /
        </span>
        <Label top="Function Name">
          <input
            ref={nameRef}
            type="text"
            data-name={KEYS.functionName}
            data-fl
            data-fl-at="bottom"
            className={s.func_input}
            value={functionName}
            placeholder="Function Name"
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
