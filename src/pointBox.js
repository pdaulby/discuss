import React from 'react';

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

export function PointBox(props) {
    let renderDescription = ()=>(<Description value= {props.description} />);
    let renderAddBtn = ()=>(<AddBtn onClick= {props.onClick} />);

    return (
        <div className="pointBox">
            {renderDescription()}
            {renderAddBtn()}
        </div>
    );
}