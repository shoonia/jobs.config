import type { ComponentChildren, ComponentClass } from 'preact';
import ReactModal from 'react-modal';

import s from './styles.css';

export interface IModalProps {
  label?: string;
  children: ComponentChildren;
  close: () => void;
}

// @ts-expect-error @typescript-eslint/ban-ts-comment
const ReactModalPreactTyped: ComponentClass<ReactModal.Props> = ReactModal;

ReactModal.setAppElement('#app');

export const Modal: FC<IModalProps> = ({ close, label, children }) => (
  <ReactModalPreactTyped
    isOpen
    onRequestClose={close}
    contentLabel={label}
    overlayClassName={s.overlay}
    className={s.modal}
    bodyOpenClassName={s.bodyOpen}
    htmlOpenClassName={s.rootOpen}
  >
    {children as []}
  </ReactModalPreactTyped>
);
