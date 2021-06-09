import { ComponentChildren, FunctionComponent } from 'preact';

import s from './styles.css';

interface Props {
  children: ComponentChildren;
  error?: boolean;
}

export const Message: FunctionComponent<Props> = ({ children, error = false }) => (
  <div className={s.message}>
    <pre className={error ? s.error : s.success}>
      {children}
    </pre>
  </div>
);
