import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const Tree = require('../src/treeArray');
const R = require('ramda');

const getCounterpoints = Tree.getChildren;

const renderPointBox = (point) => (<PointBox description={point.description} onClick={()=>(alert('not implemented'))}/>);  

const renderPoint = R.curry(function(nodes, point) {
    return(
        <div className="point">
            {renderPointBox(point)}
            <div className="counterPoint">
                {R.map(renderPoint(nodes), Tree.getChildren(nodes, point))}
            </div>
        </div>
    )
});

class All extends React.Component {
    constructor(props) {
        super(props);
        let initial = Tree.createInitial({description: 'Discuss! press the + button to get started'});
        let withChild = Tree.addChild(initial, 0, {description: 'example counter'});
        let withChild2 = Tree.addChild(withChild, 0, {description: 'example counter2'});
        this.state = {
            points: withChild2
        }
    }

    render() {
    return (
        <div>
        {renderPoint(this.state.points, Tree.getInitial(this.state.points))}
        </div>
    );}
}

ReactDOM.render(<All/>, document.getElementById("root"));
