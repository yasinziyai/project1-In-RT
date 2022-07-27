import React, { Component } from "react";
import styles from "./Cart.module.css";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  render() {
    const { image, name, price } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="mob" />
        <h3>{name}</h3>
        <p>{price} </p>

        <div className={styles.counter}>
          <button
            className={!counter && styles.deactive}
            onClick={this.downHandler}
          >
            D
          </button>
          <span>{counter}</span>
          <button onClick={this.upHandler}>U</button>
        </div>
      </div>
    );
  }
}
