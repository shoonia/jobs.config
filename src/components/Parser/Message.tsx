import { ComponentChildren, h } from 'preact';

import s from './styles.css';
import { Issue } from '../Issue';

interface Props {
  children: ComponentChildren;
  error?: boolean;
}

export const Message = ({ children, error = false }: Props) => (
  <div className={s.message}>
    <pre className={error ? s.error : s.success}>
      {children}
    </pre>
    <div className={s.tool}>
      <Issue />
    </div>
  </div>
);
