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

/** @returns {import('@babel/types').MemberExpression} */
const createObjectAssign = () => ({
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

/** @type {import('@babel/types').LogicalExpression} */
const maybePolyfill = {
  operator: '||',
  right: { type: 'FunctionExpression' },
};

/** @type {import('@babel/types').MemberExpression} */
const objectAssign = createObjectAssign();

/** @type {import('@babel/types').LogicalExpression} */
const objectAssignTs = {
  type: 'LogicalExpression',
  operator: '&&',
  left: { type: 'ThisExpression' },
  right: {
    type: 'MemberExpression',
    computed: false,
    object: { type: 'ThisExpression' },
    property: {
      type: 'Identifier',
      name: '__assign',
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

        if (deepMatch(node, maybePolyfill)) {
          if (
            deepMatch(node.left, objectAssign) ||
            deepMatch(node.left, objectAssignTs)
          ) {
            path.replaceWith(createObjectAssign());
          }
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
