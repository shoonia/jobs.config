import { useEffect, useRef } from 'preact/hooks';
import s from './styles.css';

interface Props {
  open: boolean;
  label: string;
}

export const Modal: FC<Props> = ({ open, label, children }) => {
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
      aria-label={label}
    >
      {children}
    </dialog>
  );
};
