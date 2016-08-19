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

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _decorators = require('./decorators');

var _decorators2 = _interopRequireDefault(_decorators);

var TreeBeard = (function (_React$Component) {
    _inherits(TreeBeard, _React$Component);

    function TreeBeard(props) {
        _classCallCheck(this, TreeBeard);

        _get(Object.getPrototypeOf(TreeBeard.prototype), 'constructor', this).call(this, props);
    }

    _createClass(TreeBeard, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var data = this.props.data;
            // Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
            if (!Array.isArray(data)) {
                data = [data];
            }
            return _react2['default'].createElement(
                'ul',
                { ref: 'treeBase' },
                data.map(function (node, index) {
                    return _react2['default'].createElement(_node2['default'], {
                        key: node.id || index,
                        node: node,
                        onToggle: _this.props.onToggle,
                        decorators: _this.props.decorators
                    });
                })
            );
        }
    }]);

    return TreeBeard;
})(_react2['default'].Component);

TreeBeard.propTypes = {
    data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]).isRequired,
    onToggle: _react2['default'].PropTypes.func,
    decorators: _react2['default'].PropTypes.object
};

TreeBeard.defaultProps = {
    decorators: _decorators2['default']
};

exports['default'] = TreeBeard;
module.exports = exports['default'];