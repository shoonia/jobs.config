import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { useCallback, useRef } from 'preact/hooks';

import { createConfig } from './fn';
import st from './styles.css';

function Preview() {
  const { items } = useStoreon('items');
  const value = createConfig(items);
  const area = useRef(null);

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
        value={value} />
      <button
        type="button"
        className={st.copy}
        onClick={clipboard}
      >
        Copy to clipboard
      </button>
    </div>
  );
}

export default Preview;
