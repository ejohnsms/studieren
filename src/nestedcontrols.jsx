import React from 'react';
import ReactDOM from 'react-dom';

function ParentControl(props) {

  return(
    <div class="wrapper">
      <div>
        <span class="topLeft">
          {props.tl}
        </span>
        <span class="topRight">
          {props.tr}
        </span>
      </div>
      <div>
        <span class="bottomLeft">
          {props.bl}
        </span>
        <span class="bottomRight">
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
