/**
 * @param {import('@babel/types').Expression} node
 * @param {import('@babel/types').Expression} pattern
 * @returns {boolean}
 */
const isMatch = (node, pattern) => {
  if (node == null || pattern == null) {
    return node === pattern;
  }

  if (Array.isArray(node)) {
    return Array.isArray(pattern)
      && node.length === pattern.length
      && pattern.every((p, i) => isMatch(node[i], p));
  }

  if (typeof node === 'object') {
    return typeof pattern === 'object'
      && Object.keys(pattern).every((i) => isMatch(node[i], pattern[i]));
  }

  return Object.is(node, pattern);
};

const components = new Set([
  'Modal',
  'ModalPortal',
]);

/**
 * @type {import('@babel/types').AssignmentExpression}
 * @example
 * ```
 * Name.propTypes =
 * ```
 */
const propTypes = {
  operator: '=',
  right: { type: 'ObjectExpression' },
  left: {
    type: 'MemberExpression',
    computed: false,
    object: { type: 'Identifier' },
    property: {
      type: 'Identifier',
      name: 'propTypes',
    },
  },
};

/**
 * @type {import('@babel/types').CallExpression}
 * @example
 * ```
 * Object.defineProperty(t, "__esModule", { value: true });
 * ```
 */
const esModule = {
  callee: {
    type: 'MemberExpression',
    object: {
      type: 'Identifier',
      name: 'Object',
    },
    computed: false,
    property: {
      type: 'Identifier',
      name: 'defineProperty',
    },
  },
  arguments: [
    {
      type: 'Identifier',
    },
    {
      type: 'StringLiteral',
      value: '__esModule',
    },
    {
      type: 'ObjectExpression',
      properties: [
        {
          type: 'ObjectProperty',
          method: false,
          key: {
            type: 'Identifier',
            name: 'value',
          },
          computed: false,
          shorthand: false,
        },
      ],
    },
  ],
};

/**
 * @returns {import('@babel/core').PluginObj}
 */
const plugin = (api) => {
  const isHasOwn = api.types.buildMatchMemberExpression('Object.prototype.hasOwnProperty.call', false);

  return {
    name: 'minimizer',
    visitor: {
      AssignmentExpression(path) {
        const { node } = path;

        if (
          isMatch(node, propTypes) &&
          components.has(node.left.object.name)
        ) {
          path.remove();
        }
      },

      CallExpression(path) {
        const { node } = path;

        if (isMatch(node, esModule)) {
          path.replaceWith({
            type: 'AssignmentExpression',
            operator: '=',
            left: {
              type: 'MemberExpression',
              object: node.arguments[0],
              computed: false,
              property: {
                type: 'Identifier',
                name: '__esModule',
              },
            },
            right: node.arguments[2].properties[0].value,
          });
        }
        else if (isHasOwn(node.callee)) {
          node.callee = {
            type: 'MemberExpression',
            object: {
              type: 'Identifier',
              name: 'Object',
            },
            computed: false,
            property: {
              type: 'Identifier',
              name: 'hasOwn',
            },
          };
        }
      },
    },
  };
};

export { plugin as default };
