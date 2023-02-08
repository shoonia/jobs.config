import s from './ItemMenu.css';
import { useStoreon } from '../../store';
import { useFormScope } from '../../hooks/formScope';
import { BlankButton } from '../Button';
import { IconBin } from '../Icons/IconBin';
import { IconClone } from '../Icons/IconClone';
import { IconChevron } from '../Icons/IconChevron';
import { MAX_ITEMS } from '../../constants';

export const ItemMenu: FC = () => {
  const { id } = useFormScope();
  const { dispatch, items } = useStoreon('items');

  const len = items.length;
  const index = items.findIndex((i) => i.id === id);

  const up = () => dispatch('items/up', id);
  const down = () => dispatch('items/down', id);
  const remove = () => dispatch('items/remove', id);
  const clone = () => dispatch('items/clone', id);

  return (
    <div className={s.buttons}>
      <div>
        <BlankButton
          aria-label="Move up"
          onClick={up}
          className={s.btn}
          data-rh="Move up"
          data-rh-at="top"
          disabled={index < 1}
        >
          <IconChevron up={false} />
        </BlankButton>
        <BlankButton
          aria-label="Move down"
          onClick={down}
          className={s.btn}
          data-rh="Move down"
          data-rh-at="top"
          disabled={index >= len - 1}
        >
          <IconChevron up />
        </BlankButton>
      </div>
      <div>
        <BlankButton
          aria-label="remove"
          onClick={remove}
          className={s.btn}
          data-rh="Remove"
          data-rh-at="top"
        >
          <IconBin />
        </BlankButton>
        <BlankButton
          aria-label="clone"
          onClick={clone}
          className={s.btn}
          data-rh="Clone"
          data-rh-at="top"
          disabled={len >= MAX_ITEMS}
        >
          <IconClone />
        </BlankButton>
      </div>
    </div>
  );
};
