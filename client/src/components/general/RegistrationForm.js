import React, { useState } from "react";
import "../styles/RegistrationForm.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    confirm: "",
    dob: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (key, value) => {
    setRegistrationData({ ...registrationData, [key]: value });
  };
  const countries = [
    "Mexico",
    "Colombia",
    "Bolivia",
    "Dominican Republic",
    "South Africa",
    "Lebanon",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <h2>Register</h2>
      <form className="form_body">
        <div className="email">
          <label className="form_label" for="email">
            Email
          </label>
          <input
            className="form_input"
            type="email"
            value={registrationData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email..."
            required
          ></input>
        </div>
        <div className="password">
          <label className="form_label" for="password">
            Password
          </label>
          <input
            className="form_input"
            type="text"
            value={registrationData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Password..."
            required
          ></input>
        </div>
        <div className="confirm_password">
          <label className="form_label" for="confirm">
            Confirm Password
          </label>
          <input
            className="form_input"
            type="text"
            value={registrationData.confirm}
            onChange={(e) => handleChange("confirm", e.target.value)}
            placeholder="Confirm password..."
            required
          ></input>
        </div>
        <div>
          <label className="date" for="date">
            Date of birth
          </label>
          <ReactDatePicker
            className="dateOfBirth"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>

        <div>
          <label className="country" for="country">
            Country
          </label>
          <select>
            {countries.map((country) => (
              <option>{country}</option>
            ))}
          </select>
        </div>
      </form>

      <div className="form_button">
        <button onSubmit={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>

      {/* <Link to="/login">Already Registered?</Link> */}
    </section>
  );
};

export default RegistrationForm;
