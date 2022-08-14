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
                Hello{" "}
                <Link
                  to={`/dashboard/${user["role"]}/${user["firstname"]}-${user["surname"]}`}
                  className="user_header_name"
                >
                  {user["firstname"]}
                </Link>{" "}
                <span style={{ color: "red" }}> | </span>{" "}
                <Link to="/logout">Log Out</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Log in</Link>{" "}
                <span style={{ color: "red" }}> | </span>{" "}
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <nav className="nav_dektop">
        <ul className="nav_ul">
          <li className="nav_link" style={{ alignSelf: "self-start" }}>
            <a href="https://www.breteaufoundation.org/" target="blank">
              {" "}
              <img src="/img/logo.png" alt="app logo" className="app_logo" />
            </a>
          </li>
          <li>
            <Link to="/" className="nav_link">
              <img src="/svg/home.svg" alt="home svg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/student/${user["firstname"]}-${user["surname"]}`}
              className="nav_link"
            >
              <img src="/svg/quiz.svg" alt="home svg" />
              <span>Lessons</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`mobile_nav ${mobileNavClass ? "moving" : ""}`}>
        <ul className="mobile_nav_ul">
          <li
            onClick={() => {
              setMobileNavClass(false);
            }}
          >
            <Link to="/" className="mobile_nav_link">
              {" "}
              <img src="/svg/home.svg" alt="home svg" />
              <span>Home</span>
            </Link>
          </li>
          <li
            onClick={() => {
              setMobileNavClass(false);
            }}
          >
            <Link
              to={`/dashboard/student/${user["firstname"]}-${user["surname"]}`}
              className="mobile_nav_link"
            >
              {" "}
              <img src="/svg/quiz.svg" alt="lessons svg" />
              <span>Lessons</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile_logo_burger">
        <img src="/img/logo.png" alt="app logo" className="app_logo" />

        <div
          className="hamburger_container"
          onClick={() => setMobileNavClass(!mobileNavClass)}
        >
          <div className="hamburger_parts color"></div>
          <div className="hamburger_parts color"></div>
          <div className="hamburger_parts color"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
