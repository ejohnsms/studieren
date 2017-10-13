import { ListItem } from './listitem.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <div>
      <div>list of array items</div>
      <ul>{listItems}</ul>
    </div>
  );
}

export {NumberList};
