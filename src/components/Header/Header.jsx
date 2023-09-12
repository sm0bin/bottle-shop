import React from "react";
import "./Header.css";
import reactLogo from "/src/assets/react.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
