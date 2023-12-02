import { useRef } from 'preact/hooks';

import s from './styles.css';
import { useStoreon } from '../../store';
import { Button } from '../Button';
import { ToolbarWrapper, ToolbarHint } from '../Toolbar';
import { JSON } from './JSON';
import { DownloadButton } from '../DownloadButton';
import { IconDuplicate } from '../Icons/IconDuplicate';
import { createConfig } from '../../util/items';

const createData = (config: string): string => `// Jobs Config Generator
// https://wix.to/NDAQn6c

${config}`;

export const Preview: FC = () => {
  const { items } = useStoreon('items');
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
        className={s.out}
      >
        <JSON input={config} />
      </pre>
    </div>
  );
};
