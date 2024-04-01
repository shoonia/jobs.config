import { useEffect } from 'preact/hooks';

import s from './CronTrue.css';
import { parseCron } from '../../util/parseCron';
import { classNames } from '../../util/component';
import { useFormScope } from '../../hooks/formScope';
import { useDispatch } from '../../store';

export const CronTrue: FC = () => {
  const dispatch = useDispatch();
  const { id, cronExpression } = useFormScope();
  const [isError, message] = parseCron(cronExpression);

  useEffect(() => {
    dispatch('items/update', {
      id,
      name: 'cronError',
      value: isError ? message : '',
    });
  }, [isError]);

  return (
    <div className={classNames([s.message, isError && s.error ])}>
      {message}
    </div>
  );
};
