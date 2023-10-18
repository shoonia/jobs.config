// eslint-disable-next-line no-undef
module.exports = () => {
  return {
    name: 'Remove `Object.assign` polyfill',
    visitor: {
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
    },
  };
};
