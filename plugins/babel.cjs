/* eslint-disable no-undef */

const deepMatch = (source, patter) => {
  if (
    typeof source === 'object' &&
    typeof patter === 'object'
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
          path.replaceWith(node.left);
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
