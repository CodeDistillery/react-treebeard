'use strict';

import React from 'react';

class NodeHeader extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {decorators} = this.props;
        const terminal = !this.props.node.children;
        const active = this.props.node.active;

        return (
            <decorators.Container
                decorators={decorators}
                terminal={terminal}
                onClick={this.props.onClick}
                node={this.props.node}
            />
        );
    }
}

NodeHeader.propTypes = {
    decorators: React.PropTypes.object.isRequired,
    node: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func
};

export default NodeHeader;
