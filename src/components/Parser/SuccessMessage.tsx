import { h } from 'preact';

import s from './styles.css';

interface Props {
  children: string;
}

export function SuccessMessage({ children }: Props) {
  return (
    <div className={s.message}>
      <pre className={s.success}>
        {children}
      </pre>
    </div>
  );
}
