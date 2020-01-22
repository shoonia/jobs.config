import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import s from './styles.css';

function fetchStars(cb) {
  return fetch('https://api.github.com/repos/shoonia/jobs.config')
    .then((response) => response.json())
    .then((data) => data.stargazers_count)
    .catch(() => null)
    .then(cb);
}

function GitHub() {
  const [stars, setStars] = useState(null);
  const btnClass = stars == null ? s.btnOnly : s.btn;

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

export default GitHub;
