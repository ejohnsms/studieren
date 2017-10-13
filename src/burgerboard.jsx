import React from 'react';
import ReactDOM from 'react-dom';

function BurgerBoard(props) {
  if (!props.isBigBurger) {
    return null;
  }

  return (
    <div className="warning">
      That's a big burger!!
    </div>
  );
}

export {BurgerBoard};
