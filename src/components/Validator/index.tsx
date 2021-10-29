import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState, IEvents } from '../../store';
import { preventDefault } from '../../util/component';
import { Parser } from '../Parser';
import { CopyLinkButton } from '../CopyLinkButton';
import { UploadFile } from '../UploadFile';

export const Validator: FC = () => {
  const { validatorValue, dispatch } = useStoreon<IState, IEvents>('validatorValue');

  const onInput: EventListener = ({ target }) => {
    if (target instanceof HTMLTextAreaElement) {
      dispatch('validator/input', target.value);
    }
  };

  const onLoad = (value: string): void => {
    dispatch('validator/input', value);
  };

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
          <textarea
            onInput={onInput}
            className={s.area}
            value={validatorValue}
            placeholder="{}"
            spellcheck={false}
          />
          <aside className={s.tools}>
            <CopyLinkButton className={s.btn} />
            <span className={s.btn}>
              <UploadFile onLoad={onLoad} />
            </span>
          </aside>
        </form>
        <Parser value={validatorValue} />
      </div>
    </section>
  );
};
