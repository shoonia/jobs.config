import s from './styles.css';
import { MenuItem } from './MenuItem';
import { ROUTER } from '../../constants';

export const Menu: FC = () => (
  <ul className={s.list}>
    <MenuItem path={ROUTER.BUILDER}>
      Builder
    </MenuItem>
    <MenuItem path={ROUTER.VALIDATOR}>
      Validator
    </MenuItem>
  </ul>
);
