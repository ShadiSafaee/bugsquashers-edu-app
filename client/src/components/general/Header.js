import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import SyntaxContext from "../../context/user/SyntaxContext";

const Header = () => {
  const context = useContext(SyntaxContext);
  console.log(context);
  return (
    <header className="header">
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
      <nav className="nav_dektop">
        <ul className="nav_ul">
          <li className="nav_link">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile_nav moving">
        <ul className="mobile_nav_ul">
          <li className="mobile_nav_link">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger_container">
        <div className="hamburger_parts color"></div>
        <div className="hamburger_parts color"></div>
        <div className="hamburger_parts color"></div>
      </div>
    </header>
  );
};

export default Header;
