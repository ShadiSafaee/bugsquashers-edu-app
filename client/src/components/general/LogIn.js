import "../styles/LogIn.css";
import { React } from "react";

const LogIn = () => {
  return (
    <section className="login_section">
      <h2>Log In</h2>
      <form className="login_form">
        <input
          className="login_input"
          type="email"
          placeholder="Email..."
          required
        />
        <input
          className="login_input"
          type="password"
          placeholder="Password..."
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
