/**
 * @param {import('@babel/types').Expression} node
 * @param {import('@babel/types').Expression} pattern
 * @returns {boolean}
 */
const isMatch = (node, pattern) => {
  if (Array.isArray(node)) {
    return Array.isArray(pattern) && pattern.every((p, i) => isMatch(node[i], p));
  }

  if (node == null || pattern == null) {
    return node === pattern;
  }

  if (typeof node === 'object') {
    return typeof pattern === 'object' && Object.keys(pattern).every((i) => isMatch(node[i], pattern[i]));
  }

  return node === pattern;
};

const components = new Set([
  'Modal',
  'ModalPortal',
]);

/**
 * @returns {import('@babel/types').MemberExpression}
 * @example
 * ```
 * Object.assing
 * ```
 */
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

/**
 * @type {import('@babel/types').LogicalExpression}
 * @example
 * ```
 * || functon() {}
 * ```
 */
const maybePolyfill = {
  operator: '||',
  right: { type: 'FunctionExpression' },
};

/** @type {import('@babel/types').MemberExpression} */
const objectAssign = createObjectAssign();

/**
 * @type {import('@babel/types').LogicalExpression}
 * @example
 * ```
 * this.__assign
 * ```
 */
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
 * @returns {import('@babel/core').PluginObj}
 */
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
            path.replaceWith(createObjectAssign());
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
