import { useState } from 'preact/hooks';

import { useStore } from '../../store';
import { createValidatorLink } from '../../util/validatorValue';
import { IconCopyLink } from '../Icons/IconCopyLink';
import { BlankButton } from '../Button';

interface Props {
  className?: string;
}

export const CopyLinkButton: FC<Props> = ({ className }) => {
  const store = useStore();
  const [isCopied, setState] = useState(false);

  const label = isCopied
    ? 'Copied!'
    : 'Copy link to validation results';

  const onClick: EventListener = async () => {
    const { validatorValue } = store.get();
    const link = createValidatorLink(validatorValue);

    if (link) {
      history.pushState(null, '', link);

      await navigator.clipboard.writeText(link);
      setState(true);
      setTimeout(setState, 2_000, false);
    }
  };

  return (
    <BlankButton
      onClick={onClick}
      className={className}
      aria-label={label}
      data-rh={label}
      data-rh-at="left"
    >
      <IconCopyLink />
    </BlankButton>
  );
};
