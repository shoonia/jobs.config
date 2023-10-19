import s from './styles.css';
import { useStars } from './useStars';

export const GitHub: FC = () => {
  const stars = useStars();

  return (
    <div
      className={s.widget}
      data-rh="Repository on GitHub"
      data-rh-at="left"
    >
      <a
        className={stars ? s.btn : s.btnOnly}
        href="https://github.com/shoonia/jobs.config"
        aria-label="Star on GitHub"
        tabIndex={0}
      >
        <span className={s.label}>
          Star
        </span>
      </a>
      {stars && (
        <a
          className={s.count}
          href="https://github.com/shoonia/jobs.config/stargazers"
          aria-label={`${stars} stargazers on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          {stars}
        </a>
      )}
    </div>
  );
};
