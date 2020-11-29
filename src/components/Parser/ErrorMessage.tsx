import { h } from 'preact';

import s from './styles.css';

interface Props {
  children?: string;
}

export function ErrorMessage({ children }: Props) {
  if (typeof children !== 'string') {
    return null;
  }

  return (
    <div className={s.message}>
      <pre className={s.error}>
        {children}
      </pre>
    </div>
  );
}
