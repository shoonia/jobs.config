import { h } from 'preact';
import { useState } from 'preact/hooks';

import s from './styles.css';
import { preventDefault } from '../../util/component';
import { Parser } from '../Parser';

export function Validator() {
  const [value, setValue] = useState<string>('');

  const onInput = ({ target }) => {
    setValue(target.value.trim());
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
            placeholder="{}"
          />
        </form>
        <Parser value={value} />
      </div>
    </section>
  );
}
