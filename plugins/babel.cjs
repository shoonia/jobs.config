/* eslint-disable no-undef */

/**
 * @param {import('@babel/types')} t
 * @returns {import('@babel/core').PluginObj}
 */
module.exports = () => {
  const componentNames = new Set([
    'Modal',
    'ModalPortal',
  ]);

  return {
    name: 'minimizer',
    visitor: {
      // Remove `Object.assign` polyfill
      LogicalExpression(path) {
        const { node } = path;

        if (
          node.operator === '||' &&
          node.left.type === 'MemberExpression' &&
          node.right.type === 'FunctionExpression' &&
          node.left.object.type === 'Identifier' &&
          node.left.property.type === 'Identifier' &&
          node.left.object.name === 'Object' &&
          node.left.property.name === 'assign'
        ) {
          path.replaceWith({
            type: 'MemberExpression',
            object: {
              type: 'Identifier',
              name: 'Object',
            },
            computed: false,
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
          node.left.type === 'MemberExpression' &&
          node.left.property.type === 'Identifier' &&
          node.left.property.name === 'propTypes' &&
          node.left.object.type === 'Identifier' &&
          componentNames.has(node.left.object.name)
        ) {
          path.remove();
        }
      },
    },
  };
};
