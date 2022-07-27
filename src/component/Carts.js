import React, { Component } from "react";
import Cart from "./Cart";
import styles from "./Carts.module.css";

import mob1 from "../Images/mob1.jpg";

export default class Carts extends Component {
  constructor() {
    super();
    this.state = {
      phonData: [
        { image: mob1, name: "iphon 13", price: "500 $" },
        { image: mob1, name: "iphon 11", price: "500 $" },
        { image: mob1, name: "sumsong s20", price: "500 $" },
        { image: mob1, name: "sumsong note 10", price: "500 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Cart image={mob1} name="iphon 13" price="500 $" />
        <Cart image={mob1} name="iphon 11" price="200 $" />
        <Cart image={mob1} name="sumsong s20" price="150 $" />
        <Cart image={mob1} name="sumsong note 10" price="300 $" /> */}
        {this.state.phonData.map((phone) => (
          <Cart
            key={phone.name}
            image={phone.image}
            name={phone.name}
            price={phone.price}
          />
        ))}
      </div>
    );
  }
}
