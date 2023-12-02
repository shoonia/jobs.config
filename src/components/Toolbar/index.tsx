import s from './styles.css';

interface IHintProps {
  label: string;
}

export const ToolbarWrapper: FC = ({ children }) => (
  <div className={s.box}>
    {children}
  </div>
);

export const ToolbarHint: FC<IHintProps> = ({ children, label }) => (
  <span
    data-rh={label}
    data-rh-at="top"
    className={s.hint}
  >
    {children}
  </span>
);
