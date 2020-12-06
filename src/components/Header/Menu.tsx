import { h } from 'preact';

import s from './styles.css';
import { MenuItem } from './MenuItem';
import { ROUTER } from '../../constants';

export const Menu = () => (
  <ul className={s.list}>
    <MenuItem path={ROUTER.BUILDER}>
      Builder
    </MenuItem>
    <MenuItem path={ROUTER.VALIDATOR}>
      Validator
    </MenuItem>
  </ul>
);
