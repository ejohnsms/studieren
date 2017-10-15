import BurgerCalculator from './burgercalculator.jsx';
import Clock from './clock.jsx';
import FoodOrderForm from './foodorderform.jsx';
import { NumberDictionary } from './numberdictionary.jsx';
import { NumberList } from './numberlist.jsx';
import { ParentControl, ChildControl } from './nestedcontrols.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './toggle.jsx';
import '../assets/index.css';

// data
const numbersDictionary = [{'key':'one', 'value': 1}, {'key':'two', 'value': 2}, {'key':'three', 'value': 3}, {'key':'four', 'value': 4}, {'key':'five', 'value': 5}];
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div>
      <BurgerCalculator />
      <FoodOrderForm />
      <NumberDictionary dictionary={numbersDictionary} />
      <NumberList numbers={numbers} />,
      <Toggle />
      <Clock />
      <Clock name="Curly" />
      <Clock name="Moe" />
      <ParentControl
        tl={
          <ChildControl name="top left"/>
        }
        tr={
          <ChildControl name="top right"/>
        }
        bl={
          <ChildControl name="bottom left" />
        }
        br={
          <ChildControl name="bottom right" />
        }
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
