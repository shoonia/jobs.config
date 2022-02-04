interface Props {
  up: boolean;
}

export const IconChevron: FC<Props> = ({ up }) => (
  <svg
    width="24"
    height="24"
    fill="#116dff"
    aria-hidden="true"
  >
    <path
      d={up
        ? 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'
        : 'M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z'
      }
    />
  </svg>
);
