import type { ComponentChildren } from 'preact';

import s from './styles.css';

interface IWrapperProps {
  children: ComponentChildren;
}

interface IHintProps {
  label?: string;
  children: ComponentChildren;
}

const Wrapper: FC<IWrapperProps> = ({ children }) => (
  <div className={s.box}>
    {children}
  </div>
);

const Hint: FC<IHintProps> = ({ children, label }) => (
  <span
    data-rh={label}
    data-rh-at="top"
    className={s.hint}
  >
    {children}
  </span>
);

export const Toolbar = {
  Wrapper,
  Hint,
} as const;
