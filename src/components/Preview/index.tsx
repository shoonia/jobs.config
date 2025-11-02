import type { ClipboardEventHandler } from 'preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import { useItemsStore } from '../../store/useItemsStore';
import { Button } from '../Button';
import { ToolbarWrapper, ToolbarHint } from '../Toolbar';
import { JSON } from './JSON';
import { DownloadButton } from '../DownloadButton';
import { IconDuplicate } from '../Icons/IconDuplicate';
import { createConfig } from '../../util/items';
import { preventDefault } from '../../util/component';

const createData = (config: string): string => `// Jobs Config Generator
// https://wix.to/NDAQn6c

${config}`;

export const Preview: FC = () => {
  const { items } = useItemsStore();
  const output = useRef<HTMLPreElement>(null);

  const config = createConfig(items);
  const data = createData(config);

  const clipboard: EventListener = async () => {
    await navigator.clipboard.writeText(data);

    if (output.current) {
      const selection = getSelection();
      const range = document.createRange();

      range.selectNodeContents(output.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const copy: ClipboardEventHandler<HTMLPreElement> = (event) => {
    event.clipboardData?.setData('text/plain', data);
    preventDefault(event);
  };

  return (
    <div className={s.box}>
      <ToolbarWrapper>
        <ToolbarHint label="Copy to clipboard">
          <Button onClick={clipboard}>
            <IconDuplicate />
            Copy Code
          </Button>
        </ToolbarHint>
        <ToolbarHint label="Download a file">
          <DownloadButton
            label="Download a file"
            data={data}
          />
        </ToolbarHint>
      </ToolbarWrapper>
      <pre
        ref={output}
        onCopy={copy}
        className={s.out}
      >
        <JSON input={config} />
      </pre>
    </div>
  );
};
