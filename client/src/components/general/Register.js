import React, { useContext } from "react";
import "../styles/RegistrationForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SyntaxContext from "../../context/user/SyntaxContext";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const { registerFormHandler, registerHandler, register, errorMessage } =
    useContext(SyntaxContext);
  const countries = [
    "Mexico",
    "Colombia",
    "Bolivia",
    "Dominican Republic",
    "South Africa",
    "Lebanon",
  ];
  return (
    <section className="register_section">
      <h2>Register</h2>
      <form
        className="register_form"
        onSubmit={(e) => {
          e.preventDefault();
          registerHandler(e);
        }}
      >
        <div>
          <input
            className="register_input"
            type="email"
            value={register["email"]}
            onChange={(e) => registerFormHandler("email", e.target.value)}
            placeholder="Email..."
            required
          ></input>
          <span className="input_message">{errorMessage["email"]}</span>
        </div>
        <div>
          <input
            className="register_input"
            type="password"
            value={register["password"]}
            onChange={(e) => registerFormHandler("pass", e.target.value)}
            placeholder="Password..."
            required
          ></input>
          <span className="input_message">{errorMessage["password"]}</span>
        </div>
        <div>
          <input
            className="register_input"
            type="password"
            value={register["confpass"]}
            onChange={(e) => registerFormHandler("confpass", e.target.value)}
            placeholder="Retype password..."
            required
          ></input>
          <span className="input_message">{errorMessage["confpass"]}</span>
        </div>
        <div>
          <input
            className="register_input"
            type="text"
            value={register["firstname"]}
            onChange={(e) => registerFormHandler("fname", e.target.value)}
            placeholder="Firstname..."
            required
          ></input>
          <span className="input_message">{errorMessage["firstname"]}</span>
        </div>
        <div>
          <input
            className="register_input"
            type="text"
            value={register["surname"]}
            onChange={(e) => registerFormHandler("lname", e.target.value)}
            placeholder="Surname"
            required
          ></input>
          <span className="input_message">{errorMessage["surname"]}</span>
        </div>
        <DatePicker
          selected={register["dob"]}
          onSelect={(date) => {
            registerFormHandler("dob", date);
          }}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={15}
          scrollableYearDropdown
          dateFormat="dd/MM/yyyy"
        />
        <div className="gerister_select_div">
          <select
            className="register_select"
            value={register["country"]}
            onChange={(e) => registerFormHandler("country", e.target.value)}
          >
            <option
              value="none"
              onChange={(e) => registerFormHandler("country", "none")}
            >
              Select Country...
            </option>
            {countries.map((country) => (
              <option
                className="register_select_opts"
                onChange={(e) => registerFormHandler("country", country)}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>
          <span className="input_message">{errorMessage["country"]}</span>
        </div>

        <button type="submit" className="btn register_btn">
          Register
        </button>
      </form>

      {/* <Link to="/login">Already Registered?</Link> */}
    </section>
  );
};

export default RegistrationForm;
