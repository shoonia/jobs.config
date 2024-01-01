import s from './styles.css';

export const StandWithUkraine: FC = () => (
  <div className={s.swu_box}>
    <a
      href="https://www.wix.com/stands-with-ukraine"
      className={s.swu_link}
    >
      <svg aria-label="the national flag of Ukraine" viewBox="0 0 3 2" width="1.4em">
        <path d="M0 0h3v1H0z" fill="#005bbb" />
        <path d="M0 1h3v1H0z" fill="#ffd500" />
      </svg>
      Support Ukraine
    </a>
  </div>
);
