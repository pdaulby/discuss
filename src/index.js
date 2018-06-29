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
            {renderPointBox(point, ()=>handleClick('not implementd'))}
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
        {renderPoint(this.state.points, alert, Tree.getInitial(this.state.points))}
        </div>
    );}

    handleClick(node, description) {
        this.setState({})
    }
}

ReactDOM.render(<All/>, document.getElementById("root"));
