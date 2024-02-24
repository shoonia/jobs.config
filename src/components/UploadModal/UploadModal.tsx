import type { JSX } from 'preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import { useDispatch } from '../../store';
import { preventDefault } from '../../util/component';
import { parseJSONC } from '../Parser/parseJSONC';
import { isValidConfig } from '../Parser/isValidConfig';
import { type IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';
import { Modal } from '../Modal';
import { TextBox } from '../TextBox';
import { BlankButton, Button } from '../Button';
import { UploadFile } from '../UploadFile';
import { IconCancel } from '../Icons/IconCancel';
import { IconConfirm } from '../Icons/IconConfirm';

const close = (): void => {
  location.hash = ROUTER.BUILDER;
};

export const UploadModal: FC = () => {
  const ref = useRef<string>('');
  const dispatch = useDispatch();

  const onLoad = (val: string): void => {
    if (val.trim() === '') {
      return close();
    }

    const [parsingError, config] = parseJSONC(val);

    if (!parsingError) {
      const [validationError] = isValidConfig(config);

      if (!validationError) {
        dispatch('items/replace', createItems(config as IConfig));

        return close();
      }
    }

    dispatch('validator/input', val);
    location.hash = ROUTER.VALIDATOR;
  };

  const onInput: JSX.InputEventHandler<HTMLTextAreaElement> = (event) => {
    ref.current = event.currentTarget.value;
  };

  const onSubmit: EventListener = (event) => {
    preventDefault(event);
    onLoad(ref.current);
  };

  return (
    <Modal label="Upload form" close={close}>
      <form
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
    </Modal>
  );
};
