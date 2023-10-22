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

const components = new Set([
  'Modal',
  'ModalPortal',
]);

/** @type {import('@babel/types').LogicalExpression} */
const objectAssign = {
  operator: '||',
  right: { type: 'FunctionExpression' },
  left: {
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
  },
};

/** @type {import('@babel/types').AssignmentExpression} */
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

/** @returns {import('@babel/core').PluginObj} */
const plugin = () => {
  return {
    name: 'minimizer',
    visitor: {
      // Remove `Object.assign` polyfill
      LogicalExpression(path) {
        const { node } = path;

        if (deepMatch(node, objectAssign)) {
          path.replaceWith(node.left);
        }
      },

      // Remove React PropTypes
      AssignmentExpression(path) {
        const { node } = path;

        if (
          deepMatch(node, propTypes) &&
          components.has(node.left.object.name)
        ) {
          path.remove();
        }
      },
    },
  };
};

export { plugin as default };
