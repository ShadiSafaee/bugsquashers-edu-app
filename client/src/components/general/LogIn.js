import "../styles/LogIn.css";
import { React, useContext } from "react";
import SyntaxContext from "../../context/user/SyntaxContext";
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
          value={login["email"]}
          onChange={(e) => loginHandler("email", e.target.value)}
          required
        />
        <input
          className="login_input"
          type="password"
          placeholder="Password..."
          value={login["password"]}
          onChange={(e) => loginHandler("pass", e.target.value)}
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
