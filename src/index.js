import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const R = require('ramda');

function Description(props) {
    return (<p className="description">{props.value}</p>);
}

function AddBtn(props) {
    return (
        <button className="addBtn" onClick={props.onClick}>
          +
        </button>
      );
}

function Point(props) {
    let renderDescription = ()=>(<Description value= {props.value} />);
    let renderAddBtn = ()=>(<AddBtn onClick= {()=>(alert(props.value))} />);

    return (
        <div className="point">
            {renderDescription()}
            {renderAddBtn()}
        </div>
    );
}

const renderPoint = (value) => (<Point value={value.description}/>);
const renderAll = R.map(renderPoint);

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: [
                {
                    id: 0,
                    description: "x gon give it to ya, something something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj",
                    counterpoints: []
                }
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
