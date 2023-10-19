import type { ComponentChild } from 'preact';

import s from '../../styles/code.css';

interface Props {
  input: string;
}

interface IToken {
  regex: RegExp;
  className?: string;
}

const tokens: IToken[] = [
  {
    // Whitespace, Brackets, Braces, Colon, Comma
    regex: /^[\s[\]{}:,]+/,
  },
  {
    // String literal
    regex: /^"(?:\\.|[^"\\])*"/,
    className: s.mtk6,
  },
  {
    // Number literal
    regex: /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,
    className: s.mtk5,
  },
];

export const JSON: FC<Props> = ({ input }) => {
  const items: ComponentChild[] = [];

  while (input) {
    for (const token of tokens) {
      const match = token.regex.exec(input);

      if (Array.isArray(match)) {
        const [row] = match;

        const item = token.className
          ? (
            <span className={token.className}>
              {row}
            </span>
          )
          : row;

        items.push(item);
        input = input.slice(row.length);

        break;
      }
    }
  }

  return (
    <code>
      {items}
    </code>
  );
};
