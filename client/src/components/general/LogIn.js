import "../styles/LogIn.css";
import { React, setState } from "react";

const LogIn = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="log">
        <h2>Log In</h2>
        <form className="log_body" onSubmit={handleSubmit}>
          <input
            className="log_input"
            type="email"
            name="email"
            placeholder="Email..."
            required
            onChange={handleChange}
          />
          <input
            className="log_input"
            type="password"
            name="password"
            placeholder="Password..."
            required
            onChange={handleChange}
          />
          <button onSubmit={handleSubmit} className="log_btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
