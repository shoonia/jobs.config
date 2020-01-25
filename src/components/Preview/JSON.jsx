import { h } from 'preact';

import s from '../../code.css';

const tokens = [
  {
    regex: /^\s+/,
    className: '',
  },
  {
    regex: /^[{}]/,
    className: s.mtk1,
  },
  {
    regex: /^[[\]]/,
    className: s.mtk1,
  },
  {
    regex: /^:/,
    className: s.mtk1,
  },
  {
    regex: /^,/,
    className: s.mtk1,
  },
  {
    regex: /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,
    className: s.mtk5,
  },
  {
    regex: /^"(?:\\.|[^"\\])*"(?=\s*:)/, // keys
    className: s.mtk6,
  },
  {
    regex: /^"(?:\\.|[^"\\])*"/, // string literals
    className: s.mtk6,
  },
  // {
  //   regex: /^true|^false/,
  //   className: s.mtk4,
  // },
  // {
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
