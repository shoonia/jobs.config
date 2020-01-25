import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { useCallback, useRef } from 'preact/hooks';

import Button from '../Button';
import JSON from './JSON';
import { createConfig } from './util';
import s from './styles.css';

function Preview() {
  const { items } = useStoreon('items');
  const input = useRef(null);

  const config = createConfig(items);
  const dataURL = 'data:application/json,' + encodeURIComponent(config);

  const clipboard = useCallback(() => {
    input.current.select();
    document.execCommand('copy');
  }, []);

  return (
    <div className={s.box}>
      <pre className={s.out}>
        <JSON input={config} />
      </pre>
      <input
        ref={input}
        type="text"
        value={config}
        className={s.hidden}
      />
      <div className={s.copy}>
        <Button
          mode="extra"
          onClick={clipboard}
        >
          Copy Code
        </Button>
      </div>
      <div className={s.export}>
        <a
          href={dataURL}
          className={s.download}
          download="jobs.config"
          type="application/json"
          aria-label="Download a file"
          data-rh="Download a file"
          data-rh-at="left"
        />
      </div>
    </div>
  );
}

export default Preview;
