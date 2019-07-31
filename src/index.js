import React, { Component } from "react";
import ReactDOM from "react-dom";
//import './index.css';
import CoolCounter from "./coolCounter";
//import * as serviceWorker from './serviceWorker';

function onDecrement(currentValue, previousValue) {
  console.log(currentValue, previousValue);
}
function onIncrement(currentValue, previousValue) {
  console.log(currentValue, previousValue);
}

class Test extends Component {
  state = { value: 1 };

  onDecrement = (currentValue, previousValue) => {
    console.log(currentValue, previousValue);
    this.setState({ value: currentValue });
  };
  onIncrement = (currentValue, previousValue) => {
    console.log(currentValue, previousValue);
    this.setState({ value: currentValue });
  };

  render() {
    return (
      <CoolCounter
        min={1}
        max={10}
        isLoading={true}
        loaderColor={"#80C241"}
        // rootStyle={{width:80,border:"1px solid #80C241"}}
        decrementStyle={{ color: "#80C241" }}
        incrementStyle={{ color: "#80C241" }}
        valueStyle={{ fontSize: 13 }}
        value={this.state.value}
        onDecrement={this.onDecrement}
        onIncrement={this.onIncrement}
      />
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
