import React from 'react';
import ReactDOM from 'react-dom';

export default class FoodOrderForm extends React.Component {
  constructor(props) {
    super(props);

    // set the state
    this.state = {
      foodInput: 'sushi',
      fruitSelect: 'grapefruit'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.foodInput);
    console.log(this.state.fruitSelect);
    event.preventDefault(); // stop the page from doing it's thing
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="foodInput" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite La Croix flavor:
          <select name="fruitSelect" value={this.state.selected} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
