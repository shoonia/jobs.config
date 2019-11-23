import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { useCallback, useRef } from 'preact/hooks';

import Button from '../Button';
import Icon from '../Icon';
import { createConfig } from './fn';
import st from './styles.css';

function Preview() {
  const { items } = useStoreon('items');
  const area = useRef(null);

  const config = createConfig(items);
  const dataURL = `data:application/json,${encodeURIComponent(config)}`;

  const clipboard = useCallback(() => {
    area.current.select();
    document.execCommand('copy');
  }, []);

  return (
    <div className={st.box}>
      <textarea
        ref={area}
        className={st.out}
        readOnly
        value={config} />
      <div className={st.copy}>
        <Button
          mode="extra"
          onClick={clipboard}
        >
          Copy Code
        </Button>
      </div>
      <div className={st.export}>
        <a
          href={dataURL}
          className={st.download}
          download="jobs.config"
          aria-label="Download a file"
          data-rh="Download a file"
          data-rh-at="left"
        >
          <Icon name="download" />
        </a>
      </div>
    </div>
  );
}

export default Preview;
