import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import SyntaxContext from "../../context/user/SyntaxContext";

const Header = () => {
  const { mobileNavClass, setMobileNavClass, user } = useContext(SyntaxContext);
  return (
    <header className="header">
      <div className="nav_options">
        <div className="user_div">
          <ul className="user_ul">
            {user["firstname"] ? (
              <li>
                Hello
                <Link to="/user/dashboard" className="user_header_name">
                  {" "}
                  {user["firstname"]}
                </Link>{" "}
                | <Link to="/logout">Log Out</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Log in</Link> |{" "}
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="logo_div"></div>
      </div>
      <nav className="nav_dektop">
        <ul className="nav_ul">
          <li>
            <Link to="/" className="nav_link">
              <img src="/svg/home.svg" alt="home svg" />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`mobile_nav ${mobileNavClass ? "moving" : ""}`}>
        <ul className="mobile_nav_ul">
          <li
            onClick={() => {
              console.log(mobileNavClass);
              setMobileNavClass(false);
            }}
          >
            <Link to="/" className="mobile_nav_link">
              {" "}
              <img src="/svg/home.svg" alt="home svg" />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="hamburger_container"
        onClick={() => setMobileNavClass(!mobileNavClass)}
      >
        <div className="hamburger_parts color"></div>
        <div className="hamburger_parts color"></div>
        <div className="hamburger_parts color"></div>
      </div>
    </header>
  );
};

export default Header;
