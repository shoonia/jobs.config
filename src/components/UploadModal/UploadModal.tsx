
import { useRef } from 'preact/hooks';

import s from './styles.css';
import { useStoreon } from '../../store';
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

export const UploadModal: FC = () => {
  const ref = useRef<string>('');
  const { dispatch } = useStoreon();

  const close = (): void => {
    location.hash = ROUTER.BUILDER;
  };

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

  const onInput: EventListener = ({ target }) => {
    if (target instanceof HTMLTextAreaElement) {
      ref.current = target.value;
    }
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
            Upload Config
          </Button>
          <Button onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
