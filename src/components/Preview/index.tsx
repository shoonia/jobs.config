import { useStoreon } from 'storeon/preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import type { IState } from '../../store';
import { Button } from '../Button';
import { JSON } from './JSON';
import { DownloadButton } from '../DownloadButton';
import { createConfig } from '../../util/items';

export const Preview: FC = () => {
  const { items } = useStoreon<IState>('items');
  const output = useRef<HTMLPreElement>(null);

  const config = createConfig(items);

  const clipboard: EventListener = async () => {
    await navigator.clipboard.writeText(config);

    if (output.current instanceof Node) {
      const selection = window.getSelection();
      const range = document.createRange();

      range.selectNodeContents(output.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <div className={s.box}>
      <div className={s.copy}>
        <Button onClick={clipboard}>
          Copy Code
        </Button>
      </div>
      <pre
        ref={output}
        className={s.out}
      >
        <JSON input={config} />
      </pre>
      <div
        className={s.export}
        data-rh="Download a file"
        data-rh-at="left"
      >
        <DownloadButton
          label="Download a file"
          jsonString={config}
        />
      </div>
    </div>
  );
};
