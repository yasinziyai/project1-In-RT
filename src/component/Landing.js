import React, { Component } from "react";
import Baner from "./baner";
import Carts from "./Carts";
import Search from "./search";
import Logos from "./logos";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Baner />
        <Carts />
        <Search />
        <Logos />
      </div>
    );
  }
}
