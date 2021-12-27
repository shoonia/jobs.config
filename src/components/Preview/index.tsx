import { useStoreon } from 'storeon/preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import type { IState } from '../../store';
import { Button } from '../Button';
import { Toolbar } from '../Toolbar';
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
      <Toolbar.Wrapper>
        <Toolbar.Hint>
          <Button onClick={clipboard}>
            Copy Code
          </Button>
        </Toolbar.Hint>
        <Toolbar.Hint label="Download a file">
          <DownloadButton
            label="Download a file"
            jsonString={config}
          />
        </Toolbar.Hint>
      </Toolbar.Wrapper>
      <pre
        ref={output}
        className={s.out}
      >
        <JSON input={config} />
      </pre>
    </div>
  );
};
