import { FunctionComponent } from 'preact';

import { readFile } from './readFile';

interface Props {
  onLoad?: (value: string) => void;
  onError?: (error: unknown) => void;
}

export const UploadFile: FunctionComponent<Props> = ({ onLoad, onError }) => {
  const onChange: EventListener = ({ target }) => {
    readFile(target).then(onLoad, onError);
  };

  return (
    <input
      type="file"
      onChange={onChange}
    />
  );
};
