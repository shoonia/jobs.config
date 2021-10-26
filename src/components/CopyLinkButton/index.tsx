import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import { store } from '../../store';
import { delay } from '../../util/component';
import { createValidatorLink } from '../../util/validatorValue';
import { CopyLinkIcon } from './CopyLinkIcon';

interface Props {
  className?: string;
}

export const CopyLinkButton: FunctionComponent<Props> = ({ className }) => {
  const [isCopied, setState] = useState(false);

  const label = isCopied
    ? 'Copied!'
    : 'Copy link to validation results';

  const onClick: EventListener = async () => {
    const { validatorValue } = store.get();
    const link = createValidatorLink(validatorValue);

    history.pushState(null, '', link);

    await navigator.clipboard.writeText(link);
    setState(true);
    await delay(2_000);
    setState(false);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={label}
      data-rh={label}
      data-rh-at="left"
    >
      <CopyLinkIcon />
    </button>
  );
};
