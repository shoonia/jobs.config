import { h, ComponentChildren } from 'preact';

import s from '../../code.css';

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
    // Number literal
    regex: /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,
    className: s.mtk5,
  },
  {
    // String literal
    regex: /^"(?:\\.|[^"\\])*"/,
    className: s.mtk6,
  },
];

export function JSON({ input }: Props) {
  const items: ComponentChildren[] = [];

  let isFound: boolean;

  do {
    isFound = false;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const match = token.regex.exec(input);

      if (Array.isArray(match)) {
        const [row] = match;

        const item = 'className' in token
          ? (
            <span className={token.className}>
              {row}
            </span>
          )
          : row;

        items.push(item);
        input = input.substring(row.length);
        isFound = true;
        break;
      }
    }
  } while (input.length > 0 && isFound);

  return (
    <code>
      {items}
    </code>
  );
}
