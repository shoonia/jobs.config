import type { ComponentChildren } from 'preact';
import  ReactModal from 'react-modal';

import s from './styles.css';

export interface IModalProps {
  label?: string;
  children: ComponentChildren;
  close: () => void;
}

ReactModal.setAppElement('#app');

export const Modal: FC<IModalProps> = ({ close, label, children }) =>  (
  <ReactModal
    isOpen
    onRequestClose={close}
    contentLabel={label}
    overlayClassName={s.overlay}
    className={s.modal}
    bodyOpenClassName={s.bodyOpen}
    htmlOpenClassName={s.rootOpen}
  >
    {children}
  </ReactModal>
);
