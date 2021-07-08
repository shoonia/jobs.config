interface ICronExample {
  label: string;
  value: string;
}

export const cronExamples: ICronExample[] = [
  {
    label: 'Every 1 hour',
    value: '0 * * * *',
  },
  {
    label: 'Every 3 hours',
    value: '0 */3 * * *',
  },
  {
    label: 'Every Monday',
    value: '0 0 * * MON',
  },
  {
    label: 'Every Tuesday and Sunday',
    value: '0 0 * * TUE,SUN',
  },
  {
    label: 'Every Friday at 12:15',
    value: '15 12 * * FRI',
  },
  {
    label: 'Every month',
    value: '0 0 1 * *',
  },
  {
    label: 'Every 2 months',
    value: '0 0 1 */2 *',
  },
  {
    label: 'Every 3 months at 10:30',
    value: '30 10 1 */3 *',
  },
  {
    label: 'Every year',
    value: '0 0 1 1 *',
  },
  {
    label: 'Every May and November',
    value: '0 0 1 MAY,NOV *',
  },
  {
    label: 'Every 4th of July at 18:30',
    value: '30 18 4 JUL *',
  },
];
