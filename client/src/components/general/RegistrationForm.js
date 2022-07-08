import React, { useState, useMemo } from "react";
import "../styles/RegistrationForm.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const RegistrationForm = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [name, setName] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, setValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (e) => {
    setValue(e);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirm") {
      setConfirm(value);
    }
    if (id === "name") {
      setName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <div className="form_body">
        <div className="username">
          <label className="form_label" for="username">
            Username
          </label>
          <input
            className="form_input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => handleInputChange(e)}
            placeholder="Username..."
            required
          ></input>
        </div>
        <div className="email">
          <label className="form_label" for="email">
            Email
          </label>
          <input
            className="form_input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
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
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password..."
            required
          ></input>
        </div>
        <div className="confirm_password">
          <label className="form_label" for="confirm">
            Confirm
          </label>
          <input
            className="form_input"
            type="text"
            id="confirm"
            value={confirm}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm password..."
            required
          ></input>
        </div>
        <div className="name">
          <label className="form_label" for="name">
            Name
          </label>
          <input
            className="form_input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            placeholder="Name..."
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
          <Select
            className="select"
            options={options}
            value={value}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="form_button">
        <button onSubmit={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
