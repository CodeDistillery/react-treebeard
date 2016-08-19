'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUtils = require('react-utils');

var _reactUtils2 = _interopRequireDefault(_reactUtils);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var TreeNode = (function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        _get(Object.getPrototypeOf(TreeNode.prototype), 'constructor', this).call(this, props);
        this.onClick = this.onClick.bind(this);
    }

    _createClass(TreeNode, [{
        key: 'onClick',
        value: function onClick() {
            var toggled = !this.props.node.toggled;
            var onToggle = this.props.onToggle;
            if (onToggle) {
                onToggle(this.props.node, toggled);
            }
        }
    }, {
        key: 'decorators',
        value: function decorators() {
            // Merge Any Node Based Decorators Into The Pack
            var props = this.props;
            var nodeDecorators = props.node.decorators || {};
            return _Object$assign({}, props.decorators, nodeDecorators);
        }
    }, {
        key: 'render',
        value: function render() {
            var decorators = this.decorators();
            return _react2['default'].createElement(
                'li',
                { ref: 'topLevel' },
                this.renderHeader(decorators),
                this.renderDrawer(decorators)
            );
        }
    }, {
        key: 'renderDrawer',
        value: function renderDrawer(decorators) {
            var toggled = this.props.node.toggled;
            if (!toggled) {
                return null;
            }
            if (toggled) {
                return this.renderChildren(decorators);
            }
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader(decorators) {
            return _react2['default'].createElement(_header2['default'], {
                decorators: decorators,
                node: this.props.node,
                onClick: this.onClick
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(decorators) {
            var _this = this;

            if (this.props.node.loading) {
                return this.renderLoading(decorators);
            }
            return _react2['default'].createElement(
                'ul',
                { ref: 'subtree' },
                _reactUtils2['default'].children.map(this.props.node.children, function (child, index) {
                    return _react2['default'].createElement(TreeNode, _extends({}, _this._eventBubbles(), {
                        key: child.id || index,
                        node: child,
                        decorators: _this.props.decorators
                    }));
                })
            );
        }
    }, {
        key: 'renderLoading',
        value: function renderLoading(decorators) {
            return _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(decorators.Loading, null)
                )
            );
        }
    }, {
        key: '_eventBubbles',
        value: function _eventBubbles() {
            return { onToggle: this.props.onToggle };
        }
    }]);

    return TreeNode;
})(_react2['default'].Component);

TreeNode.propTypes = {
    node: _react2['default'].PropTypes.object.isRequired,
    decorators: _react2['default'].PropTypes.object.isRequired,
    onToggle: _react2['default'].PropTypes.func
};

exports['default'] = TreeNode;
module.exports = exports['default'];