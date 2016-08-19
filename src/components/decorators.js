'use strict';

import React from 'react';

const Loading = (props) => {
    return (
        <div style={props.style}>
            loading...
        </div>
    );
};

Loading.propTypes = {
    style: React.PropTypes.object
};

const Toggle = (props) => {
    const height = style.height;
    const width = style.width;
    let midHeight = height * 0.5;
    let points = `0,0 0,${height} ${width},${midHeight}`;
    return (
        <div>
            <div>
                <svg height={height} width={width}>
                    <polygon
                        points={points}
                    />
                </svg>
            </div>
        </div>
    );
};

Toggle.propTypes = {
    style: React.PropTypes.object
};

const Header = (props) => {
    return (
        <div>
            <div>
                {props.node.name}
            </div>
        </div>
    );
};

Header.propTypes = {
    node: React.PropTypes.object.isRequired
};

class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {decorators, terminal, onClick, node} = this.props;
        return (
            <div
                ref="clickable"
                onClick={onClick}>
                { !terminal ? this.renderToggle() : null }
                <decorators.Header
                    node={node}
                />
            </div>
        );
    }
    renderToggle(){
        const {decorators} = this.props;
        return (<decorators.Toggle/>);
    }
}

Container.propTypes = {
    decorators: React.PropTypes.object.isRequired,
    terminal: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    node: React.PropTypes.object.isRequired
};

export default {
    Loading,
    Toggle,
    Header,
    Container
};
