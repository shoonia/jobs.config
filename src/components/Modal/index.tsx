import type { ComponentClass } from 'preact';
import ReactModal from 'react-modal';

import s from './styles.css';

interface Props {
  label: string;
  close: () => void;
}

ReactModal.setAppElement('#app');

// @ts-expect-error @typescript-eslint/ban-ts-comment
const ReactModalPreactTyped: ComponentClass<ReactModal.Props> = ReactModal;

export const Modal: FC<Props> = ({ close, label, children }) => (
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
