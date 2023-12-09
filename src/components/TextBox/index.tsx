import type { JSX } from 'preact';

import s from './styles.css';

interface Props {
  onInput: JSX.InputEventHandler<HTMLTextAreaElement>;
  value?: string;
}

export const TextBox: FC<Props> = ({ onInput, value }) => (
  <textarea
    onInput={onInput}
    className={s.box}
    value={value}
    placeholder="{}"
    spellcheck={false}
  />
);
