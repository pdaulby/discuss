import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PointBox} from './pointBox';
const R = require('ramda');

const renderPointBox = (value) => (<PointBox description={value.description} onClick={()=>(alert('not implemented'))}/>);
const renderAll = R.map(renderPointBox);

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: [
                {
                    id: 0,
                    description: "x gon give it to ya, something something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                    counterpoints: []
                },
                {
                    id: 0,
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
