import React, { Component } from "react";
import "./style.css";

class CoolCounter extends Component {
  onDecrement = value => {
    this.props.onDecrement(value, value + 1);
    this.setState({ value });
  };
  onIncrement = value => {
    this.props.onIncrement(value, value - 1);
    this.setState({ value });
  };

  isValueValid = () => {
    const { value, min, max } = this.props;

    if (typeof value != "number") {
      console.error("type of value should be number");
      return false;
    } else if (
      (typeof min == "number" && value < min) ||
      (typeof min != "number" && typeof min != "undefined")
    ) {
      console.error(
        "minimum value should be less than the value and of type number"
      );

      return false;
    } else if (
      (typeof max == "number" && value > max) ||
      (typeof max != "number" && typeof max != "undefined")
    ) {
      console.error(
        "value should be less than the maximum value and of type number"
      );
      return false;
    }

    return true;
  };

  render() {
    // const { value } = this.state;
    const {
      incrementStyle,
      decrementStyle,
      rootStyle,
      valueStyle,
      isLoading,
      value,
      loaderColor,
      min,
      max
    } = this.props;

    const width = (rootStyle && rootStyle.width) || 80;

    const isAllValid = this.isValueValid();

    return (
      <div
        style={{
          display: "flex",
          width: 80,
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          textAlign: "center",
          border: "1px solid #80C241",
          ...rootStyle
        }}
      >
        <div
          style={{ borderColor: loaderColor || "rgb(128, 194, 65)" }}
          className={isLoading ? "animate" : "hidden"}
        />

        {!isAllValid || value <= min ? (
          <div
            style={{
              cursor: "not-allowed",
              width: width / 3,
              ...decrementStyle,
              color: "grey"
            }}
          >
            -
          </div>
        ) : (
          <div
            onClick={() => this.onDecrement(value - 1)}
            style={{ cursor: "default", width: width / 3, ...decrementStyle }}
          >
            -
          </div>
        )}
        <div style={{ width: width / 3, ...valueStyle }}>
          {isAllValid ? value : NaN}
        </div>
        {!isAllValid || value >= max ? (
          <div
            style={{
              cursor: "not-allowed",
              width: width / 3,

              ...incrementStyle,
              color: "grey"
            }}
          >
            +
          </div>
        ) : (
          <div
            onClick={() => this.onIncrement(value + 1)}
            style={{ width: width / 3, cursor: "default", ...incrementStyle }}
          >
            +
          </div>
        )}
      </div>
    );
  }
}

export default CoolCounter;
