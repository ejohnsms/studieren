import { ListItem } from './listitem.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

function NumberDictionary(props) {
  const numbers = props.dictionary;
  const listItems = numbers.map((number) =>
    <ListItem key={number.key} value={number.value} />
  );
  return (
    <div>
      <div>list of dictionary items</div>
      <ul>{listItems}</ul>
    </div>
  );
}

export {NumberDictionary};
