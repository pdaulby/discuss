import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const Tree = require('../src/treeArray');
const R = require('ramda');

const renderPointBox = (point, onClick) => (<PointBox description={point.description} onClick={onClick}/>);  

const renderPoint = R.curry(function(nodes, handleClick, point) {
    return(
        <div className="point">
            {renderPointBox(point, ()=>handleClick(point, "testesstessst"))}
            <div className="counterPoint">
                {R.map(renderPoint(nodes, handleClick), Tree.getChildren(nodes, point))}
            </div>
        </div>
    )
});

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: R.pipe(Tree.createInitial, 
                Tree.addchildalt(0, {description: 'example counter'}), 
                Tree.addchildalt(0, {description: 'example counter2'}))
                ({description: 'Discuss! press the + button to get started'})
        }
    }

    render() {
    return (
        <div>
        {renderPoint(this.state.points, (node, description)=>this.handleClick(node, description), Tree.getInitial(this.state.points))}
        </div>
    );}

    handleClick(node, description) {
        let points = this.state.points;
        let newPoints = Tree.addChild(points, node.id, {description: description});
        this.setState({points: newPoints});
    }
}

ReactDOM.render(<All/>, document.getElementById("root"));
