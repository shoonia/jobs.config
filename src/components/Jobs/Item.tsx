import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { FormScope } from '../../hooks/formScope';
import { IItem } from '../../util/items';
import { preventDefault } from '../../util/component';

interface Props {
  data: IItem;
  remove: EventListener;
  clone: EventListener;
  update: EventListener;
  isMax: boolean;
}

export const Item: FunctionComponent<Props> = ({
  data,
  remove,
  clone,
  update,
  isMax,
}) => (
  <FormScope.Provider value={data}>
    <li>
      <form
        id={data.id}
        action="#"
        className={s.item}
        onInput={update}
        onSubmit={preventDefault}
      >
        <FunctionInfo />
        <Period />
        <ExecutionConfig />
        <ItemMenu
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  </FormScope.Provider>
);
