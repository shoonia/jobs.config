import type { ComponentChildren, FunctionComponent } from 'preact';

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

export const JSON: FunctionComponent<Props> = ({ input }) => {
  const items: ComponentChildren[] = [];

  while (input.length > 0) {
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
