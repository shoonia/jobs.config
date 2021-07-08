import { FunctionComponent } from 'preact';

import s from './CronExamples.css';
import { Label } from './Label';
import { Button } from '../Button';
import { useFormScope } from '../../hooks/formScope';
import { KEYS } from '../../constants';

export const CronExamples: FunctionComponent= () => {
  const { id } = useFormScope();

  return (
    <Label top="Cron Examples">
      <Button
        blank
        className={s.btn}
        aria-haspopup="true"
        aria-label="Show examples"
        data-fl
        data-fl-at="right"
        data-name={KEYS.cronExpression}
        data-id={id}
      >
        <svg
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"/>
        </svg>
      </Button>
    </Label>
  );
};
