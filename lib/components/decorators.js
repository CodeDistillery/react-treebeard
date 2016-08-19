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

var Loading = function Loading(props) {
    return _react2['default'].createElement(
        'div',
        { style: props.style },
        'loading...'
    );
};

Loading.propTypes = {
    style: _react2['default'].PropTypes.object
};

var Toggle = function Toggle(props) {
    var height = style.height;
    var width = style.width;
    var midHeight = height * 0.5;
    var points = '0,0 0,' + height + ' ' + width + ',' + midHeight;
    return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'svg',
                { height: height, width: width },
                _react2['default'].createElement('polygon', {
                    points: points
                })
            )
        )
    );
};

Toggle.propTypes = {
    style: _react2['default'].PropTypes.object
};

var Header = function Header(props) {
    return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
            'div',
            null,
            props.node.name
        )
    );
};

Header.propTypes = {
    node: _react2['default'].PropTypes.object.isRequired
};

var Container = (function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container(props) {
        _classCallCheck(this, Container);

        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var decorators = _props.decorators;
            var terminal = _props.terminal;
            var onClick = _props.onClick;
            var node = _props.node;

            return _react2['default'].createElement(
                'div',
                {
                    ref: 'clickable',
                    onClick: onClick },
                !terminal ? this.renderToggle() : null,
                _react2['default'].createElement(decorators.Header, {
                    node: node
                })
            );
        }
    }, {
        key: 'renderToggle',
        value: function renderToggle() {
            var decorators = this.props.decorators;

            return _react2['default'].createElement(decorators.Toggle, null);
        }
    }]);

    return Container;
})(_react2['default'].Component);

Container.propTypes = {
    decorators: _react2['default'].PropTypes.object.isRequired,
    terminal: _react2['default'].PropTypes.bool.isRequired,
    onClick: _react2['default'].PropTypes.func.isRequired,
    node: _react2['default'].PropTypes.object.isRequired
};

exports['default'] = {
    Loading: Loading,
    Toggle: Toggle,
    Header: Header,
    Container: Container
};
module.exports = exports['default'];