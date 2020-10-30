/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function constantFoldingPlugin(context) {
  const t = context.types;

  const evaluate = function(path) {
    const state = {
      safe: true
    };

    const unsafe = (path, state) => (state.safe = false);

    path.traverse(
      {
        CallExpression: unsafe,
        AssignmentExpression: unsafe
      },
      state
    );

    try {
      return state.safe
        ? path.evaluate()
        : {
            confident: false,
            value: null
          };
    } catch (err) {
      return {
        confident: false,
        value: null
      };
    }
  };

  const FunctionDeclaration = {
    exit(path, state) {
      const binding =
        path.node.id !== null && path.scope.getBinding(path.node.id.name);

      if (binding && !binding.referenced) {
        state.stripped = true;
        path.remove();
      }
    }
  };
  const FunctionExpression = {
    exit(path, state) {
      const parentPath = path.parentPath;

      if (t.isVariableDeclarator(parentPath)) {
        const binding = parentPath.scope.getBinding(parentPath.node.id.name);

        if (binding && !binding.referenced) {
          state.stripped = true;
          parentPath.remove();
        }
      }
    }
  };
  const Conditional = {
    exit(path, state) {
      const node = path.node;
      const result = evaluate(path.get("test"));

      if (result.confident) {
        state.stripped = true;

        if (result.value || node.alternate) {
          path.replaceWith(result.value ? node.consequent : node.alternate);
        } else if (!result.value) {
          path.remove();
        }
      }
    }
  };
  const Expression = {
    exit(path) {
      const result = evaluate(path);

      if (result.confident) {
        path.replaceWith(t.valueToNode(result.value));
        path.skip();
      }
    }
  };
  const LogicalExpression = {
    exit(path) {
      const node = path.node;
      const result = evaluate(path.get("left"));

      if (result.confident) {
        const value = result.value;

        switch (node.operator) {
          case "||":
            path.replaceWith(value ? node.left : node.right);
            break;

          case "&&":
            path.replaceWith(value ? node.right : node.left);
            break;

          case "??":
            path.replaceWith(value == null ? node.right : node.left);
            break;
        }
      }
    }
  };
  const Program = {
    enter(path, state) {
      state.stripped = false;
    },

    exit(path, state) {
      path.traverse(
        {
          ArrowFunctionExpression: FunctionExpression,
          ConditionalExpression: Conditional,
          FunctionDeclaration,
          FunctionExpression,
          IfStatement: Conditional
        },
        state
      );

      if (state.stripped) {
        path.scope.crawl(); // Re-traverse all program, if we removed any blocks. Manually re-call
        // enter and exit, because traversing a Program node won't call them.

        Program.enter(path, state);
        path.traverse(visitor);
        Program.exit(path, state);
      }
    }
  };
  const visitor = {
    BinaryExpression: Expression,
    LogicalExpression,
    Program: _objectSpread({}, Program),
    // Babel mutates objects passed.
    UnaryExpression: Expression
  };
  return {
    visitor
  };
}

module.exports = constantFoldingPlugin;
