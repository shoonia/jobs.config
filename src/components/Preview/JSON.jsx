import { h } from 'preact';
import { memo } from 'preact/compat';

import s from '../../code.css';

const tokens = [
  {
    // Whitespace
    regex: /^\s+/,
    className: '',
  },
  {
    // Braces
    regex: /^[{}]/,
    className: '',
  },
  {
    // Brackets
    regex: /^[[\]]/,
    className: '',
  },
  {
    // Colon
    regex: /^:/,
    className: '',
  },
  {
    // Comma
    regex: /^,/,
    className: '',
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

function JSON({ input }) {
  const items = [];

  let isFound;

  do {
    isFound = false;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const match = token.regex.exec(input);

      if (Array.isArray(match)) {
        const item = token.className !== ''
          ? (
            <span className={token.className}>
              {match[0]}
            </span>
          ) : match[0];

        items.push(item);
        input = input.substring(match[0].length);
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

export default memo(JSON);
