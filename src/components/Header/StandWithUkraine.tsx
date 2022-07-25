import s from './styles.css';

export const StandWithUkraine: FC = () => (
  <div className={s.swu_box}>
    <svg aria-label="stand with ukraine" viewBox="0 0 3 2" width="1.4em">
      <path d="M0 0h3v1H0z" fill="#005bbb"></path>
      <path d="M0 1h3v1H0z" fill="#ffd500"></path>
    </svg>
    <a
      href="https://www.wix.com/stands-with-ukraine"
      className={s.swu_link}
    >
      Support Ukraine
    </a>
  </div>
);
