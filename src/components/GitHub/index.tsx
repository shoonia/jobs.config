import { h } from 'preact';
import { useState, useEffect, StateUpdater } from 'preact/hooks';

import s from './styles.css';
import { isProd } from '../../util/component';

const fetchStars = (cb: StateUpdater<number>) => {
  if (isProd) {
    fetch('https://api.github.com/repos/shoonia/jobs.config')
      .then((response) => response.json())
      .then((data) => parseInt(data.stargazers_count, 10))
      .catch(() => NaN)
      .then(cb);
  }
};

export function GitHub() {
  const [stars, setStars] = useState<number>(NaN);
  const btnClass = isNaN(NaN) ? s.btnOnly : s.btn;

  useEffect(() => {
    fetchStars(setStars);
  }, []);

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
      {stars != null && (
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
}
