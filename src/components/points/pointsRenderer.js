import React from 'react';

import PointBox from './pointBox';
const Tree = require('../../../src/treeArray');
const R = require('ramda');

const renderPointBox = (point, onClick) => (<PointBox description={point.description} onClick={onClick}/>);  

const renderPoint = R.curry(function(nodes, handleClick, point) {
    return(
        <div className="point">
            {renderPointBox(point, ()=>handleClick(point, prompt('Please type your counterpoint','')))}
            <div className="counterPoint">
                {R.map(renderPoint(nodes, handleClick), Tree.getChildren(nodes, point))}
            </div>
        </div>
    )
});

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: Tree.createInitial({description: prompt('What is the question you wish to discuss', 'Discuss! press the + button to get started')})
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
    return (
        <div>
        {renderPoint(this.state.points, this.handleClick, Tree.getInitial(this.state.points))}
        </div>
    );}

    handleClick(node, description) {
        if (description == null || description === ''){ return; }
        let points = this.state.points;
        let newPoints = Tree.addChild(points, node.id, {description: description});
        this.setState({points: newPoints});
    }
}

export default Points;