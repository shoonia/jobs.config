import s from './styles.css';
import { useStoreon } from '../../store';
import { FormScopeProvider } from '../../hooks/formScope';
import { Item } from './Item';

export const Jobs: FC = () => {
  const { items } = useStoreon('items');

  const list = items.map((i) => (
    <li key={i.id}>
      <FormScopeProvider value={i}>
        <Item id={i.id} isNew={i.isNew} />
      </FormScopeProvider>
    </li>
  ));

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
};
