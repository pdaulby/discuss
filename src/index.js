import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const Tree = require('../src/treeArray');
const R = require('ramda');

const getCounterpoints = Tree.getChildren;

const renderPointBox = (point) => (<PointBox description={point.description} onClick={()=>(alert('not implemented'))}/>);  

const renderPoint = function(point) {
    return(
        <div className="point">
            {renderPointBox(point)}
            <div className="counterPoint">
                {R.map(renderPoint, getCounterpoints(point))}
            </div>
        </div>
    )
}

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: R.pipe(Tree.createInitial)({description: 'Discuss! press the + button to get started'})
        }
    }

    render() {
    return (
        <div>
        {renderPoint(Tree.getInitial(this.state.points))}
        </div>
    );}
}

ReactDOM.render(<All/>, document.getElementById("root"));
