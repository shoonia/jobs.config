import { useEffect, useRef } from 'preact/hooks';

import s from './styles.css';
import { Label } from './Label';
import { KEYS } from '../../constants';
import { useFormScope } from '../../hooks/formScope';

export const Cron: FC = () => {
  const { cronExpression, cronError = '' } = useFormScope();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.setCustomValidity(cronError);
  }, [cronError]);

  return (
    <Label top="Cron Expression">
      <input
        ref={ref}
        type="text"
        className={s.mono}
        value={cronExpression}
        data-name={KEYS.cronExpression}
        spellcheck={false}
        list="cron-examples"
        required
      />
    </Label>
  );
};
