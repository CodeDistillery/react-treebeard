'use strict';

import React from 'react';
import rutils from 'react-utils';

import NodeHeader from './header';

class TreeNode extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        let toggled = !this.props.node.toggled;
        let onToggle = this.props.onToggle;
        if(onToggle){ onToggle(this.props.node, toggled); }
    }
    decorators(){
        // Merge Any Node Based Decorators Into The Pack
        const props = this.props;
        let nodeDecorators = props.node.decorators || {};
        return Object.assign({}, props.decorators, nodeDecorators);
    }
    render(){
        const decorators = this.decorators();
        return (
            <li ref="topLevel">
                {this.renderHeader(decorators)}
                {this.renderDrawer(decorators)}
            </li>
        );
    }
    renderDrawer(decorators){
        const toggled = this.props.node.toggled;
        if(!toggled){ return null; }
        if(toggled){
            return this.renderChildren(decorators);
        }
    }
    renderHeader(decorators){
        return (
            <NodeHeader
                decorators={decorators}
                node={this.props.node}
                onClick={this.onClick}
            />
        );
    }
    renderChildren(decorators){
        if(this.props.node.loading){ return this.renderLoading(decorators); }
        return (
            <ul ref="subtree">
                {rutils.children.map(this.props.node.children, (child, index) =>
                    <TreeNode
                        {...this._eventBubbles()}
                        key={child.id || index}
                        node={child}
                        decorators={this.props.decorators}
                    />
                )}
            </ul>
        );
    }
    renderLoading(decorators){
        return (
            <ul>
                <li>
                    <decorators.Loading/>
                </li>
            </ul>
        );
    }
    _eventBubbles(){
        return { onToggle: this.props.onToggle };
    }
}

TreeNode.propTypes = {
    node: React.PropTypes.object.isRequired,
    decorators: React.PropTypes.object.isRequired,
    onToggle: React.PropTypes.func
};

export default TreeNode;
