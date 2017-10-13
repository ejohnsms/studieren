import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = { 'g': 'grams', 'oz': 'ounces'};

export default class WeightInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'weight':''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(scale, event) {
    this.props.onWeightChange(scale, event.target.value);
  }

  render() {
    const weight = this.props.weight;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter weight in {scaleNames[scale]}:</legend>
        <input  value={weight}
                onChange={this.handleChange.bind(this, scale)}
                scale={scale}/>
      </fieldset>
    );
  }
}
