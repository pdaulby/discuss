import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const R = require('ramda');

const getCounterpoints = (point) => point.counterpoints;

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
            points:{
                    description: "Discuss! press the + button to get started",
                    counterpoints: [
                        {
                            description: "first starting point something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                            counterpoints: [
                                {
                                    description: "counterpoint something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                    counterpoints: []
                                },
                                {
                                    description: "counterpoint2 something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                    counterpoints: [
                                        {
                                            description: "countercounterpoint something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                            counterpoints: []
                                        },
                                        {
                                            description: "countercounterpoint2 something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                            counterpoints: []
                                        },]
                                },
                            ]
                        },
                        {
                            description: "second starting point something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                            counterpoints: []
                        },
                    ]
                }
        }
    }

    render() {
    return (
        <div>
        {renderPoint(this.state.points)}
        </div>
    );}
}

ReactDOM.render(<All/>, document.getElementById("root"));
