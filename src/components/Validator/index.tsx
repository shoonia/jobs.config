import type { JSX } from 'preact';

import s from './styles.css';
import { useStoreon } from '../../store';
import { preventDefault } from '../../util/component';
import { Parser } from '../Parser';
import { CopyLinkButton } from '../CopyLinkButton';
import { UploadFile } from '../UploadFile';
import { TextBox } from '../TextBox';

export const Validator: FC = () => {
  const { validatorValue, dispatch } = useStoreon('validatorValue');

  const onInput: JSX.InputEventHandler<HTMLTextAreaElement> = (event) =>
    dispatch('validator/input', event.currentTarget.value);

  const onLoad = (value: string): void =>
    dispatch('validator/input', value);

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
            value={validatorValue}
          />
          <aside className={s.tools}>
            <CopyLinkButton className={s.btn} />
            <UploadFile
              className={s.btn}
              onLoad={onLoad}
            />
          </aside>
        </form>
        <Parser value={validatorValue} />
      </div>
    </section>
  );
};
