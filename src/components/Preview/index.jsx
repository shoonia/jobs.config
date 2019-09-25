import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { useCallback, useRef } from 'preact/hooks';

import Button from '../Button';
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
      <div className={st.copy}>
        <Button
          mode="extra"
          onClick={clipboard}
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
}

export default Preview;
