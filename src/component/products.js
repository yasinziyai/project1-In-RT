import React, { Component } from "react";
import axios from "axios";
import Cart from "./Cart";
import styles from "./products.module.css";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((Response) =>
      this.setState({
        products: Response.data,
      })
    );
  }
  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          <>
            {products.map((product) => (
              <Cart
                key={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
              />
            ))}
          </>
        ) : (
          <h1>LOADING ....</h1>
        )}
      </div>
    );
  }
}
