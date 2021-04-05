import { FunctionComponent } from 'preact';
import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import { preventDefault } from '../../util/component';
import { Parser } from '../Parser';
import { TEvents, TState } from '../../store';

export const Validator: FunctionComponent = () => {
  const { validatorValue, dispatch } = useStoreon<TState, TEvents>('validatorValue');

  const onInput = ({ target }) => {
    dispatch('validator/input', target.value);
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
        </form>
        <Parser value={validatorValue} />
      </div>
    </section>
  );
};
