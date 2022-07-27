import React, { Component } from "react";
import styles from "./search.module.css";
export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p> Search What you want</p>
        <input placeholder="Search ..." />
      </div>
    );
  }
}
