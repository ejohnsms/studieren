import React from 'react';
import ReactDOM from 'react-dom';
import { WarningBanner } from './warningbanner.jsx';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
      showWarning: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log(id);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      showWarning: !prevState.showWarning
    }));
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleClick.bind(this, 33)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
