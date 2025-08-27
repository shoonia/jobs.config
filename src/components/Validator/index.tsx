import type { JSX } from 'preact';

import s from './styles.css';
import { useValidatorStore } from '../../store/useValidatorStore';
import { preventDefault } from '../../util/component';
import { Parser } from '../Parser';
import { CopyLinkButton } from '../CopyLinkButton';
import { UploadFile } from '../UploadFile';
import { TextBox } from '../TextBox';

export const Validator: FC = () => {
  const { value, setValue } = useValidatorStore();

  const onInput: JSX.InputEventHandler<HTMLTextAreaElement> = (event) =>
    setValue(event.currentTarget.value);

  return (
    <section className={s.page}>
      <div className={s.box}>
        <h2 className={s.title}>
          Jobs Config Validator
        </h2>
        <form
          action="#"
          onSubmit={preventDefault}
          className={s.form}
        >
          <TextBox
            onInput={onInput}
            value={value}
          />
          <aside className={s.tools}>
            <CopyLinkButton className={s.btn} />
            <UploadFile
              className={s.btn}
              onLoad={setValue}
            />
          </aside>
        </form>
        <Parser value={value} />
      </div>
    </section>
  );
};
