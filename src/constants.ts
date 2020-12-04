export const MAX_ITEMS = 20;

export const enum PERIOD {
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
  CRON = 'Cron',
}

export const enum ROUTER {
  BUILDER = 'builder',
  VALIDATOR = 'validator',
  FIX = 'FIX',
}

export const enum KEYS {
  jobs = 'jobs',
  functionLocation = 'functionLocation',
  functionName = 'functionName',
  description = 'description',
  executionConfig = 'executionConfig',
  cronExpression = 'cronExpression',
  time = 'time',
  dayOfWeek = 'dayOfWeek',
  dateInMonth = 'dateInMonth',
}
