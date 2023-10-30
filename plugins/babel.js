const isMatch = (a, b) => {
  if (Array.isArray(a)) {
    return Array.isArray(b) && b.every((p, i) => isMatch(a[i], p));
  }

  if (a == null || b == null) {
    return a === b;
  }

  if (typeof a === 'object') {
    return typeof b === 'object' && Object.keys(b).every((i) => isMatch(a[i], b[i]));
  }

  return a === b;
};

const components = new Set([
  'Modal',
  'ModalPortal',
]);

/**
 * @param {string} prop
 * @returns {import('@babel/types').MemberExpression}
 */
const objectMember = (prop) => ({
  type: 'MemberExpression',
  computed: false,
  object: {
    type: 'Identifier',
    name: 'Object',
  },
  property: {
    type: 'Identifier',
    name: prop,
  },
});

/** @type {import('@babel/types').LogicalExpression} */
const maybePolyfill = {
  operator: '||',
  right: { type: 'FunctionExpression' },
};

/** @type {import('@babel/types').MemberExpression} */
const objectAssign = objectMember('assign');

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

        if (isMatch(node, maybePolyfill)) {
          if (
            isMatch(node.left, objectAssign) ||
            isMatch(node.left, objectAssignTs)
          ) {
            path.replaceWith(objectMember('assign'));
          }
        }
      },

      // Remove React PropTypes
      AssignmentExpression(path) {
        const { node } = path;

        if (
          isMatch(node, propTypes) &&
          components.has(node.left.object.name)
        ) {
          path.remove();
        }
      },
    },
  };
};

export { plugin as default };
