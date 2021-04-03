import { FunctionComponent } from 'preact';

import s from './styles.css';
import { useStars } from './useStars';

export const GitHub: FunctionComponent = () => {
  const stars = useStars();
  const hasStars = (stars > 0);
  const btnClass = hasStars ? s.btn : s.btnOnly;

  return (
    <div
      className={s.widget}
      data-rh="Repository on GitHub"
      data-rh-at="left"
    >
      <a
        className={btnClass}
        href="https://github.com/shoonia/jobs.config"
        aria-label="Star on GitHub"
      >
        <span className={s.label}>
          Star
        </span>
      </a>
      {hasStars && (
        <a
          className={s.count}
          href="https://github.com/shoonia/jobs.config/stargazers"
          aria-label={`${stars} stargazers on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {stars}
        </a>
      )}
    </div>
  );
};
