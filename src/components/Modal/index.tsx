import { useEffect, useRef } from 'preact/hooks';
import s from './styles.css';

interface Props {
  open: boolean;
}

export const Modal: FC<Props> = ({ open, children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={s.modal}
    >
      {children}
    </dialog>
  );
};
