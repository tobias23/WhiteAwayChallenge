import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div>
            <Products />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
