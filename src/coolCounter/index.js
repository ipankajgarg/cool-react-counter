import React, { Component } from "react";
import "./style.css";

// function translation()
// {

//    return `@keyframes  {
//         0%  {

//             -webkit-transform: translate(0%);
//         }

//         50% { -webkit-transform: translate(${80})}

//         100%{  -webkit-transform: translate(0%)}
//       }`

// }

class CoolCounter extends Component {
  // constructor(props) {
  //   super();

  //   //this.state = { value: props.value };
  // }

  onDecrement = value => {
    this.props.onDecrement(value, value + 1);
    this.setState({ value });
  };
  onIncrement = value => {
    this.props.onIncrement(value, value - 1);
    this.setState({ value });
  };


isValueValid = ()=>{
const {value} = this.props;


if( typeof value != "number"){
return NaN
}






}


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

    const width = rootStyle.width || 80;

   

    return (
      // <div style={{width:80,position:"relative"}}>

      <div
        style={{
          display: "flex",
          width: 80,
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          textAlign: "center",
          ...rootStyle
        }}
      >
        <div
          style={{ borderColor: loaderColor || "rgb(128, 194, 65)" }}
          className={isLoading ? "animate" : "hidden"}
        />

        { typeof value != "number" || value <= min ? (
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
        <div style={{ width: width / 3, ...valueStyle }}>{value}</div>
        { typeof value != "number" || value >= max ? (
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
      // </div>
    );
  }
}

export default CoolCounter;
