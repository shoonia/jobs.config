import { ComponentChildren, h } from 'preact';

import s from './styles.css';

interface Props {
  children: ComponentChildren;
}

export function ErrorMessage({ children }: Props) {
  return (
    <div className={s.message}>
      <pre className={s.error}>
        {children}
      </pre>
    </div>
  );
}
