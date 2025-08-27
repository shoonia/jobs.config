import type { JSX } from 'preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import { dispatch } from '../../store';
import { useValidatorStore } from '../../store-v2/useValidatorStore';
import { preventDefault } from '../../util/component';
import { parseJSONC } from '../Parser/parseJSONC';
import { isValidConfig } from '../Parser/isValidConfig';
import { type IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';
import { TextBox } from '../TextBox';
import { BlankButton, Button } from '../Button';
import { UploadFile } from '../UploadFile';
import { IconCancel } from '../Icons/IconCancel';
import { IconConfirm } from '../Icons/IconConfirm';

const close = () => {
  location.hash = ROUTER.BUILDER;
};

const onLoad = (value: string) => {
  if (value.trim() === '') {
    return close();
  }

  const [parsingError, config] = parseJSONC(value);

  if (!parsingError) {
    const [validationError] = isValidConfig(config);

    if (!validationError) {
      dispatch('items/replace', createItems(config as IConfig));

      return close();
    }
  }

  useValidatorStore.setState({ value });
  location.hash = ROUTER.VALIDATOR;
};

export const UploadModal: FC = () => {
  const ref = useRef('');

  const onInput: JSX.InputEventHandler<HTMLTextAreaElement> = (event) => {
    ref.current = event.currentTarget.value;
  };

  const onSubmit: EventListener = (event) => {
    preventDefault(event);
    onLoad(ref.current);
  };

  return (
    <form
      method="dialog"
      onSubmit={onSubmit}
      className={s.box}
    >
      <BlankButton
        onClick={close}
        className={s.close}
        aria-label="close modal"
      >
        <IconCancel />
      </BlankButton>
      <h2>
        Upload your config
      </h2>
      <div className={s.inputs}>
        <UploadFile
          className={s.file}
          onLoad={onLoad}
        />
        <TextBox onInput={onInput} />
      </div>
      <div className={s.btns}>
        <Button type="submit">
          <IconConfirm />
          Upload Config
        </Button>
        <Button onClick={close}>
          <IconCancel />
          Cancel
        </Button>
      </div>
    </form>
  );
};
