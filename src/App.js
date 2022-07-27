import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar";
import Landing from "./component/Landing";
import Products from "./component/products";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}
