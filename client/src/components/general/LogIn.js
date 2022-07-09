import "../styles/LogIn.css";
import { React } from "react";

const LogIn = () => {
  return (
    <section className="log">
      <h2>Log In</h2>
      <form className="log_body">
        <input
          className="log_input"
          type="email"
          placeholder="Email..."
          required
        />
        <input
          className="log_input"
          type="password"
          placeholder="Password..."
          required
        />
        <button className="log_btn">Log In</button>
      </form>
      {/* <Link to="/???">Forgot Password?</Link> */}
    </section>
  );
};

export default LogIn;
