import "../styles/LogIn.css";
import { React, useContext } from "react";
import SyntaxContext from "../../context/user/SyntaxContext";
import e from "cors";
const LogIn = () => {
  const { login, setLogin, loginHandler } = useContext(SyntaxContext);
  return (
    <section className="login_section">
      <h2>Log In</h2>
      <form className="login_form">
        <input
          className="login_input"
          type="email"
          placeholder="Email..."
          name="email"
          // value={login["email"]}
          // onChange={(e) => {
          //   setLogin((prev) => (prev += e.target.value));
          //   console.log(login);
          // }}
          required
        />
        <input
          className="login_input"
          type="password"
          placeholder="Password..."
          name="password"
          required
        />
        <button className="log_btn" type="submit">
          Log In
        </button>
      </form>
      {/* <Link to="/???">Forgot Password? Reset your password Here</Link> */}
    </section>
  );
};

export default LogIn;
