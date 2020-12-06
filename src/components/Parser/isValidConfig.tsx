import { ComponentChildren, h, Fragment } from 'preact';
import { isValidCron } from 'cron-validator';

import { CronTrue } from '../CronTrue';
import { IncorrectType } from './IncorrectType';
import { weekList } from '../../util/week';
import { isLocationPath, isUTCTime, isValidFunctionName } from '../../util/validator';
import { isNumber, isObject, isString } from '../../util/component';
import { KEYS } from '../../constants';

type TValidResult = [
  hasError: boolean,
  message?: ComponentChildren,
];

const $_ffe = [KEYS.functionLocation, KEYS.functionName, KEYS.executionConfig];
const $_ffed = [...$_ffe, KEYS.description];

const $$_wm = [KEYS.dayOfWeek, KEYS.dateInMonth];
const $$_twm = [KEYS.time, ...$$_wm];
const $$_ctwm = [KEYS.cronExpression, ...$$_twm];

const error = (message: ComponentChildren): TValidResult => [
  true,
  message,
];

const hasUnknownProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of Object.keys(item)) {
    const notOne = !list.includes(key);

    if (notOne) {
      return [true, key];
    }
  }

  return [false];
};

const hasMissingProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of list) {
    if (!(key in item)) {
      return [true, key];
    }
  }

  return [false];
};

export const isValidConfig = (config: unknown): TValidResult => {
  const separator = '", "';

  if (!isObject(config)) {
    return error(
      <Fragment>
        <p>{'Incorrect type. Expected "object".'}</p>
        <p>{'The jobs.config file must contains a JSON object.'}</p>
      </Fragment>,
    );
  }

  if (!(KEYS.jobs in config)) {
    return error(
      <Fragment>
        <p>{'Missing property "jobs".'}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </Fragment>,
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== KEYS.jobs).join(separator);

    return error(
      <Fragment>
        <p>{`Unknown property "${names}".`}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </Fragment>,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      <Fragment>
        <p>{'Incorrect type. Expected "array".'}</p>
        <p>{'The top-level key "jobs" must be an array.'}</p>
      </Fragment>,
    );
  }

  const JOBS = config.jobs;
  let i = JOBS.length;

  if (i > 20) {
    return error(
      <Fragment>
        <p>{`Too many scheduled jobs. (${i})`}</p>
        <p>You can configure up to 20 jobs.</p>
      </Fragment>,
    );
  }

  if (i < 1) {
    return error(
      <p>No scheduled jobs.</p>,
    );
  }

  if (!JOBS.every(isObject)) {
    return error(
      <Fragment>
        <p>{'Incorrect type. Expected "object."'}</p>
        <p>{'The "jobs" array must contain only objects, each of which represents a scheduled job.'}</p>
      </Fragment>,
    );
  }

  while (0 < i--) {
    const ITEM = JOBS[i];

    const [hasUnknown, unknownKey] = hasUnknownProps(ITEM, $_ffed);
    if (hasUnknown) {
      return error(
        <Fragment>
          <p>{`Unknown property "${unknownKey}" at "jobs[${i}]".`}</p>
          <p>{`Allowed one of "${$_ffed.join(separator)}"`}</p>
        </Fragment>,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(ITEM, $_ffe);
    if (hasMissing) {
      return error(
        <Fragment>
          <p>{`Missing property "${missingkey}" at "jobs[${i}]"`}</p>
          <p>{`Each scheduled job object must contain the required fields "${$_ffe.join(separator)}".`}</p>
        </Fragment>,
      );
    }

    if (KEYS.description in ITEM) {
      if (!isString(ITEM.description)) {
        return error(
          <IncorrectType index={i} name={KEYS.description} expected="string" />,
        );
      }
    }

    // TODO: functionLocation syntax

    const FL = ITEM.functionLocation;

    if (!isString(FL)) {
      return error(
        <IncorrectType index={i} name={KEYS.functionLocation} expected="string" />,
      );
    }

    if (!isLocationPath(FL)) {
      return error(
        <Fragment>
          <p>{`Invalid "functionLocation" at "jobs[${i}]".`}</p>
          <p>The function location is a relative path within the Backend folder for <code>.js</code> or <code>.jsw</code> file.</p>
          <p>File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period.</p>
        </Fragment>,
      );
    }

    const FN = ITEM.functionName;

    if (!isString(FN)) {
      return error(
        <IncorrectType index={i} name={KEYS.functionName} expected="string" />,
      );
    }

    if (!isValidFunctionName(FN)) {
      return error(
        <Fragment>
          <p>{`Invalid "functionName" at "jobs[${i}]"`}</p>
          <p>{`Error: "${FN}".`}</p>
        </Fragment>,
      );
    }

    const EXEC_CONFIG = ITEM.executionConfig;

    if (!isObject(EXEC_CONFIG)) {
      return error(
        <IncorrectType index={i} name={KEYS.executionConfig} expected="object" />,
      );
    }

    const [hasUnknown1, unknownKey1] = hasUnknownProps(EXEC_CONFIG, $$_ctwm);
    if (hasUnknown1) {
      return error(
        <Fragment>
          <p>{`Unknown property "${unknownKey1}" in "jobs[${i}].executionConfig".`}</p>
          <p>{`Allowed one of "${$$_ctwm.join(separator)}"`}</p>
        </Fragment>,
      );
    }

    if (KEYS.cronExpression in EXEC_CONFIG) {
      const CRON_EXP = EXEC_CONFIG.cronExpression;

      if (!isString(CRON_EXP)) {
        return error(
          <IncorrectType index={i} name={KEYS.cronExpression} expected="string" />,
        );
      }

      if (!isValidCron(CRON_EXP)) {
        return error(
          <Fragment>
            <p>{`Invalid "cronExpression" at "jobs[${i}].executionConfig".`}</p>
            <p>
              <CronTrue value={CRON_EXP} setValidity={() => {/**/}} />
            </p>
            <p>
              <em>
                You can schedule your job to run at intervals as short as one hour apart, but not shorter.
                If you define your job to run more frequently, the job will be ignored.
              </em>
            </p>
          </Fragment>,
        );
      }
    } else if (KEYS.time in EXEC_CONFIG) {
      const TIME = EXEC_CONFIG.time;

      if (!isString(TIME)) {
        return error(
          <IncorrectType index={i} name={KEYS.time} expected="string" />,
        );
      }

      if (!isUTCTime(TIME)) {
        return error(
          <Fragment>
            <p>{`Invalid "time" at "jobs[${i}].executionConfig".`}</p>
            <p>{`Error: "${TIME}". The time is specified as UTC time in HH:MM format.`}</p>
          </Fragment>,
        );
      }
    } else {
      return error(
        <Fragment>
          <p>{`Missing the time of the job runs at "jobs[${i}].executionConfig".`}</p>
          <p>{'The "executionConfig" object must contain one of "time", "cronExpression" properties.'}</p>
        </Fragment>,
      );
    }

    if (KEYS.dayOfWeek in EXEC_CONFIG) {
      const DOW = EXEC_CONFIG.dayOfWeek;

      if (!isString(DOW)) {
        return error(
          <IncorrectType index={i} name={KEYS.dayOfWeek} expected="string" />,
        );
      }

      if (!weekList.some((i) => i === DOW)) {
        return error(
          <Fragment>
            <p>{`Incorrect value of "dayOfWeek" at "jobs[${i}].executionConfig".`}</p>
            <p>{`Error: unknown value "${DOW}". Allowed one of "${weekList.join(separator)}"`}</p>
          </Fragment>,
        );
      }
    }

    if (KEYS.dateInMonth in EXEC_CONFIG) {
      const DIM = EXEC_CONFIG.dateInMonth;

      if (!isNumber(DIM)) {
        return error(
          <IncorrectType index={i} name={KEYS.dateInMonth} expected="number" />,
        );
      }

      if (!Number.isInteger(DIM) || DIM < 1 || DIM > 31) {
        return error(
          <Fragment>
            <p>{`Invalid "dateInMonth" at "jobs[${i}].executionConfig".`}</p>
            <p>{'The value of the "dateInMonth" property must be a number between 1 and 31.'}</p>
          </Fragment>,
        );
      }
    }

    if (
      (KEYS.cronExpression in EXEC_CONFIG) &&
      ($$_twm.some((i) => i in EXEC_CONFIG))
    ) {
      return error(
        <Fragment>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig".`}</p>
          <p>{`Error: "cronExpression" omit all of "${$$_twm.join(separator)}" properties.`}</p>
          <p>
            <em>
              {'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression.'}
            </em>
          </p>
        </Fragment>,
      );
    }

    if ($$_wm.every((i) => i in EXEC_CONFIG)) {
      return error(
        <Fragment>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig".`}</p>
          <p>{'Error: "dateInMonth" omit the "dayOfWeek" property.'}</p>
        </Fragment>,
      );
    }
  }

  return [false];
};
