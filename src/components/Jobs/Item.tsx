import type { FunctionComponent } from 'preact';

import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { preventDefault } from '../../util/component';

interface Props {
  id: string;
  update: EventListener;
}

export const Item: FunctionComponent<Props> = ({ id, update }) => (
  <form
    id={id}
    action="#"
    className={s.item}
    onInput={update}
    onSubmit={preventDefault}
  >
    <FunctionInfo />
    <Period />
    <ExecutionConfig />
    <ItemMenu />
  </form>
);
