import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    let renderAddBtn = ()=>(<AddBtn onClick= {()=>(alert("not implemented"))} />);

    return (
        <div className="point">
            {renderDescription()}
            {renderAddBtn()}
        </div>
    );
}

function All(props) {
    let renderPoint = (value)=>(<Point value={value}/>);
    return (
        <div>
        {renderPoint("x gon give it to ya, something something something sfaksd jflajsdf lakjsdflaks jdflasd jflask lkdalkjalfdkj")}
        {renderPoint("omething something sfaksd jflajsdf lakjs x gon givdje it to ya, something sdflaks jdflasd jflask lkdalkjalfdkj")}
        </div>
    );
}

ReactDOM.render(<All/>, document.getElementById("root"));
