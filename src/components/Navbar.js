import React from "react";
import logo from '../assets/airbnb-logo.png';

function Navbar() {
    return (
      <nav>
          <img className="logo" src={logo} alt="logo-airbnb"/>
      </nav>
    );
  }
  
  export default Navbar;