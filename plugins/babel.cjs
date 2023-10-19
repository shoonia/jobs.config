/* eslint-disable no-undef */

/**
 * @template {T extends object}
 * @param {T} source
 * @param {Partial<T>} patter
 * @returns {boolean}
 */
const deepMatch = (source, patter) => {
  if (
    source instanceof Array &&
    patter instanceof Array
  ) {
    return patter.every((item, i) => {
      return deepMatch(source[i], item);
    });
  }

  if (
    typeof source === 'object' && source !== null &&
    typeof patter === 'object' && patter !== null
  ) {
    return Object.keys(patter).every((key) => {
      return deepMatch(source[key], patter[key]);
    });
  }

  return source === patter;
};

/** @returns {import('@babel/core').PluginObj} */
module.exports = () => {
  const componentNames = new Set([
    'Modal',
    'ModalPortal',
  ]);

  /** @type {import('@babel/types').MemberExpression} */
  const objectAssign = {
    type: 'MemberExpression',
    computed: false,
    object: {
      type: 'Identifier',
      name: 'Object',
    },
    property: {
      type: 'Identifier',
      name: 'assign',
    },
  };

  /** @type {import('@babel/types').MemberExpression} */
  const propTypes = {
    type: 'MemberExpression',
    computed: false,
    object: {
      type: 'Identifier',
    },
    property: {
      type: 'Identifier',
      name: 'propTypes',
    },
  };

  return {
    name: 'minimizer',
    visitor: {
      // Remove `Object.assign` polyfill
      LogicalExpression(path) {
        const { node } = path;

        if (
          node.operator === '||' &&
          node.right.type === 'FunctionExpression' &&
          deepMatch(node.left, objectAssign)
        ) {
          path.replaceWith({
            type: 'MemberExpression',
            computed: false,
            object: {
              type: 'Identifier',
              name: 'Object',
            },
            property: {
              type: 'Identifier',
              name: 'assign',
            },
          });
        }
      },

      // Remove React PropTypes
      AssignmentExpression(path) {
        const { node } = path;

        if (
          node.operator === '=' &&
          node.right.type === 'ObjectExpression' &&
          deepMatch(node.left, propTypes) &&
          componentNames.has(node.left.object.name)
        ) {
          path.remove();
        }
      },
    },
  };
};
