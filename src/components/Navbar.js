import React from "react";
import iconCart from "../Icons/Cart.png";
import logo from "../logo.png";

function Navbar() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="navLogo"></img>
      <button className="btnCart">
        <p>(0)</p>
        <img src={iconCart} alt="cartIcon"></img>
      </button>
    </header>
  );
}

export default Navbar;
