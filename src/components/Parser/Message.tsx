import s from './styles.css';

interface Props {
  error?: boolean;
}

export const Message: FC<Props> = ({ children, error = false }) => (
  <div className={s.message}>
    <pre className={error ? s.error : s.success}>
      {children}
    </pre>
  </div>
);
