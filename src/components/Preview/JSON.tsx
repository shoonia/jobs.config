import { h, JSX } from 'preact';
import { memo } from 'preact/compat';

import s from '../../code.css';

interface Props {
  input: string;
}

const tokens = [
  {
    // Whitespace
    regex: /^\s+/,
  },
  {
    // Braces
    regex: /^[{}]/,
  },
  {
    // Brackets
    regex: /^[[\]]/,
  },
  {
    // Colon
    regex: /^:/,
  },
  {
    // Comma
    regex: /^,/,
  },
  {
    // Number literal
    regex: /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,
    className: s.mtk5,
  },
  {
    // String key
    regex: /^"(?:\\.|[^"\\])*"(?=\s*:)/,
    className: s.mtk6,
  },
  {
    // String literal
    regex: /^"(?:\\.|[^"\\])*"/,
    className: s.mtk6,
  },
  // {
  //   // Boolean literal
  //   regex: /^true|^false/,
  //   className: s.mtk4,
  // },
  // {
  //   // Null leteral
  //   regex: /^null/,
  //   className: s.mtk4,
  // },
];

function JSONElement({ input }: Props) {
  const items: Array<JSX.Element | string> = [];

  let isFound: boolean;

  do {
    isFound = false;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const match = token.regex.exec(input);

      if (Array.isArray(match)) {
        const row = match[0];
        const item = (token.className !== undefined)
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

export const JSON = memo(JSONElement);
