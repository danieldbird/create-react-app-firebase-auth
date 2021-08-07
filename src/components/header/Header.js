import React from "react";
import "./Header.css";
import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <Navigation />
    </header>
  );
}

export default Header;
