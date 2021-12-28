import s from './styles.css';

interface Props {
  onInput: EventListener
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
