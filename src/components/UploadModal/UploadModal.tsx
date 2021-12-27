
import { useStoreon } from 'storeon/preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import type { IEvents, IState } from '../../store';
import { preventDefault } from '../../util/component';
import { parseJSONC } from '../Parser/parseJSONC';
import { isValidConfig } from '../Parser/isValidConfig';
import { type IConfig, createItems } from '../../util/items';
import { ROUTER } from '../../constants';
import { Modal } from '../Modal';
import { TextBox } from '../TextBox';
import { Button } from '../Button';

export const UploadModal: FC = () => {
  const ref = useRef<string>('');
  const { dispatch } = useStoreon<IState, IEvents>();

  const close = (): void => {
    dispatch('router/open-modal', false);
  };

  const onInput: EventListener = ({ target }) => {
    if (target instanceof HTMLTextAreaElement) {
      ref.current = target.value;
    }
  };

  const submit: EventListener = () => {
    const [parsingError, config] = parseJSONC(ref.current);

    if (!parsingError) {
      const [validationError] = isValidConfig(config);

      if (!validationError) {
        dispatch('items/replace', createItems(config as IConfig));

        return close();
      }
    }

    dispatch('validator/input', ref.current);
    location.hash = ROUTER.VALIDATOR;
  };

  return (
    <Modal label="Upload your config" close={close}>
      <form onSubmit={preventDefault} className={s.box}>
        <TextBox onInput={onInput} />
        <Button onClick={submit}>
          Upload
        </Button>
      </form>
    </Modal>
  );
};
