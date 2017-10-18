import React from 'react';
import ReactDOM from 'react-dom';

function ParentControl(props) {
  // there is also the children property
  return(
    <div className="wrapper">
      <div>
        <span className="topLeft">
          {props.tl}
        </span>
        <span className="topRight">
          {props.tr}
        </span>
      </div>
      <div>
        <span className="bottomLeft">
          {props.bl}
        </span>
        <span className="bottomRight">
          {props.br}
        </span>
      </div>
    </div>
  );
}

function ChildControl(props) {

  return (
    <div>{props.name}</div>
  );
}

export { ParentControl, ChildControl }
