import type { ComponentChildren } from 'preact';

import s from './styles.css';

interface Props {
  children: ComponentChildren;
  error?: boolean;
}

export const Message: FC<Props> = ({ children, error = false }) => (
  <div className={s.message}>
    <pre className={error ? s.error : s.success}>
      {children}
    </pre>
  </div>
);
