import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_link">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_options">
        <div className="user_div">
          <ul className="user_ul">
            <li>
              <Link to="/login">Log in</Link> |{" "}
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="logo_div"></div>
      </div>
    </header>
  );
};

export default Header;
