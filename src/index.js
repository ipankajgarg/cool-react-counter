import React, { Component } from "react";
import ReactDOM from "react-dom";

import CoolCounter from "./coolCounter";


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
        onIncrementDisabled = {()=>console.log("disabled inc")}
        onDecrementDisabled = {()=>console.log("disabled dec")}
      />
    );
  }
}

ReactDOM.render(<Test/>, document.getElementById("root"));


