import { useState, useEffect } from 'preact/hooks';

export const useStars = (): string | undefined => {
  const [stars, setStars] = useState<string>();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      fetch('https://api.github.com/repos/shoonia/jobs.config')
        .then((response) => response.json())
        .then((data) => setStars(data.stargazers_count));
    }
  }, []);

  return stars;
};
