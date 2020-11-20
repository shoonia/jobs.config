import { useState, useEffect } from 'preact/hooks';

export const useStars = (): number => {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      fetch('https://api.github.com/repos/shoonia/jobs.config')
        .then((response) => response.json())
        .then((data) => parseInt(data.stargazers_count, 10) || 0)
        .catch(() => 0)
        .then(setStars);
    }
  }, []);

  return stars;
};
