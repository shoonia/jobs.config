import { h } from 'preact';

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
    className: s.mtk1,
  },
  {
    // Brackets
    regex: /^[[\]]/,
    className: s.mtk1,
  },
  {
    // Colon
    regex: /^:/,
    className: s.mtk1,
  },
  {
    // Comma
    regex: /^,/,
    className: s.mtk1,
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
      const match = tokens[i].regex.exec(input);

      if (Array.isArray(match)) {
        items.push(
          <span className={tokens[i].className}>
            {match[0]}
          </span>,
        );

        input = input.substring(match[0].length);
        isFound = true;
        break;
      }
    }
  } while (input.length > 0 && isFound);

  return items;
}

export default JSON;
