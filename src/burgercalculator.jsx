import { BurgerBoard } from './burgerboard.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import WeightInput from './weightinput.jsx';

const BIG_BURGER_OZ = 8;
const GRAMS_PER_OZ = 0.035274;

export default class BurgerCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      scale: ''
    }

    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  handleWeightChange(scale, weight) {
    this.setState({
      weight: weight,
      scale: scale
    })
  }

  toOunces(grams) {
    return (grams * GRAMS_PER_OZ);
  }

  toGrams(ounces) {
    return (ounces / GRAMS_PER_OZ);
  }

  tryConvert(weight, convert) {
    const input = parseFloat(weight);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

  render() {
      // const scale = this.state.scale;
      // const temperature = this.state.temperature;
      // const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      // const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

      const scale = this.state.scale;
      const weight = this.state.weight;

      const ounces = scale === 'g' ? this.tryConvert(weight, this.toOunces) : weight;
      const grams = scale === 'oz' ? this.tryConvert(weight, this.toGrams) : weight;
      const isBigBurger = ounces >= BIG_BURGER_OZ ? true : false;

      return (
        <div>
          <WeightInput
            scale="oz"
            weight={ounces}
            onWeightChange={this.handleWeightChange} />

          <WeightInput
            scale="g"
            weight={grams}
            onWeightChange={this.handleWeightChange} />

          <BurgerBoard isBigBurger={isBigBurger} />

        </div>
      );
    }

}
