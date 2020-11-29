import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';

import s from './styles.css';
import { preventDefault } from '../../util/component';
import { Button } from '../Button';
import { Parser } from '../Parser';

export function Validator() {
  const [value, setValue] = useState<string>('');
  const area = useRef<HTMLTextAreaElement>();

  const onClick = () => {
    setValue(area.current.value.trim());
  };

  return (
    <div className={s.page}>
      <div className={s.box}>
        <form
          action="#"
          onSubmit={preventDefault}
          className={s.form}
        >
          <textarea
            ref={area}
            className={s.area}
            placeholder={'{\n  "jobs": []\n}'}
          />
          <Button onClick={onClick}>
          Validate Jobs Config
          </Button>
        </form>
        <Parser value={value} />
      </div>
    </div>
  );
}
