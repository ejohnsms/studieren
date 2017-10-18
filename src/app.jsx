import React from 'react';
import ReactDOM from 'react-dom';
import BurgerCalculator from './burgercalculator';
import Clock from './clock';
import FoodOrderForm from './foodorderform';
import { NumberDictionary } from './numberdictionary';
import { NumberList } from './numberlist';
import { ParentControl, ChildControl } from './nestedcontrols';
import Toggle from './toggle';
import '../assets/index.css';

// data
const numbersDictionary = [{ key: 'one', value: 1 }, { key: 'two', value: 2 }, { key: 'three', value: 3 }, { key: 'four', value: 4 }, { key: 'five', value: 5 }];
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
          <ChildControl name="top left" />
        }
        tr={
          <ChildControl name="top right" />
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
  document.getElementById('root'),
);
