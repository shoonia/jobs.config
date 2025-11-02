import s from './styles.css';

interface Props {
  top: string;
}

export const Label: FC<Props> = ({ top, children }) => (
  <label className={s.block}>
    <span className={s.text}>
      {top}
    </span>
    {children}
  </label>
);
