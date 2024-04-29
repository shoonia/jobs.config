import { useState } from 'preact/hooks';

import { getState } from '../../store';
import { createValidatorLink } from '../../util/validatorValue';
import { IconCopyLink } from '../Icons/IconCopyLink';
import { BlankButton } from '../Button';

interface Props {
  className?: string;
}

export const CopyLinkButton: FC<Props> = ({ className }) => {
  const [isCopied, setCopy] = useState(false);

  const label = isCopied
    ? 'Copied!'
    : 'Copy link to validation results';

  const onClick: EventListener = async () => {
    const { validatorValue } = getState();
    const link = createValidatorLink(validatorValue);

    if (link) {
      history.pushState(null, '', link);

      await navigator.clipboard.writeText(link);
      setCopy(true);
      setTimeout(setCopy, 2_000, false);
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
