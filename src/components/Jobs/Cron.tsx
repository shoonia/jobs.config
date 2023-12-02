import { useEffect, useRef } from 'preact/hooks';

import s from './styles.css';
import { Label } from './Label';
import { KEYS } from '../../constants';

interface Props {
  value: string;
  error: boolean;
}

export const Cron: FC<Props> = ({ value, error }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.setCustomValidity(error ? 'error': '');
  }, [error]);

  return (
    <Label top="Cron Expression">
      <input
        ref={ref}
        type="text"
        className={s.mono}
        value={value}
        data-name={KEYS.cronExpression}
        spellcheck={false}
        list="cron-examples"
        required
      />
    </Label>
  );
};
