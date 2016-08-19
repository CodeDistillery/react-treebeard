'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NodeHeader = (function (_React$Component) {
    _inherits(NodeHeader, _React$Component);

    function NodeHeader(props) {
        _classCallCheck(this, NodeHeader);

        _get(Object.getPrototypeOf(NodeHeader.prototype), 'constructor', this).call(this, props);
    }

    _createClass(NodeHeader, [{
        key: 'render',
        value: function render() {
            var decorators = this.props.decorators;

            var terminal = !this.props.node.children;
            var active = this.props.node.active;
            var container = [style.link, active ? style.activeLink : null];

            return _react2['default'].createElement(decorators.Container, {
                decorators: decorators,
                terminal: terminal,
                onClick: this.props.onClick,
                node: this.props.node
            });
        }
    }]);

    return NodeHeader;
})(_react2['default'].Component);

NodeHeader.propTypes = {
    decorators: _react2['default'].PropTypes.object.isRequired,
    node: _react2['default'].PropTypes.object.isRequired,
    onClick: _react2['default'].PropTypes.func
};

exports['default'] = NodeHeader;
module.exports = exports['default'];