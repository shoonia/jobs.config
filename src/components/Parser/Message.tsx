import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  children: ComponentChildren;
  error?: boolean;
}

export function Message({ children, error = false }: Props) {
  return (
    <div className={s.message}>
      <pre className={error ? s.error : s.success}>
        {children}
      </pre>
    </div>
  );
}
