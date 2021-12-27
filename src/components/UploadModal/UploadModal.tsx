
import { useStoreon } from 'storeon/preact';

import type { IEvents, IState } from '../../store';
import { Modal } from '../Modal';

export const UploadModal: FC = () => {
  const { dispatch } = useStoreon<IState, IEvents>();

  const close = () => {
    dispatch('router/open-modal', false);
  };

  return (
    <Modal close={close}>
      hello
    </Modal>
  );
};
