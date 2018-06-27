import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const R = require('ramda');

const renderPointBox = (value) => (<PointBox description={value.description} onClick={()=>(alert('not implemented'))}/>);  

const renderPoint = function(point) {
    return(
        <div className="point">
            {renderPointBox(point)}
            <div className="counterPoint">
                {R.map(renderPoint, point.counterpoints)}
            </div>
        </div>
    )
}

const renderAll = R.map(renderPoint);  

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: [
                {
                    description: "x gon give it to ya, something something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                    counterpoints: [
                        {
                            description: "counter counter countersomething something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                            counterpoints: [
                                {
                                    description: "counter counter countersomething something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                    counterpoints: []
                                },
                                {
                                    description: "counter2 counter2 counter2something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                                    counterpoints: []
                                },
                            ]
                        },
                        {
                            description: "counter2 counter2 counter2something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                            counterpoints: []
                        },
                    ]
                },
                {
                    description: "y gon give it to ya, something something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                    counterpoints: []
                },
            ]
        }
    }

    render() {
    return (
        <div>
        {renderAll(this.state.points)}
        </div>
    );}
}

ReactDOM.render(<All/>, document.getElementById("root"));
