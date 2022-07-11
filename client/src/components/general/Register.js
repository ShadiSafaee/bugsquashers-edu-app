import React, { useContext, useEffect } from "react";
import "../../styles/register.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SyntaxContext from "../../context/user/SyntaxContext";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const {
    registerFormHandler,
    registerHandler,
    setLogin,
    register,
    errorMessage,
    setErrorMessage,
  } = useContext(SyntaxContext);
  useEffect(() => {
    setLogin({
      email: "",
      password: "",
    });
    setErrorMessage({
      email: "",
      password: "",
      confpass: "",
      firstname: "",
      surname: "",
      country: "",
    });
  }, []);

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
        <div className="input_container">
          <input
            className="register_input"
            type="email"
            value={register["email"]}
            onChange={(e) => registerFormHandler("email", e.target.value)}
            placeholder="Email..."
          ></input>
          <span className="input_message">{errorMessage["email"]}</span>
        </div>
        <div className="input_container">
          <input
            className="register_input"
            type="password"
            value={register["password"]}
            onChange={(e) => registerFormHandler("pass", e.target.value)}
            placeholder="Password..."
          ></input>
          <span className="input_message">{errorMessage["password"]}</span>
        </div>
        <div className="input_container">
          <input
            className="register_input"
            type="password"
            value={register["confpass"]}
            onChange={(e) => registerFormHandler("confpass", e.target.value)}
            placeholder="Retype password..."
          ></input>
          <span className="input_message">{errorMessage["confpass"]}</span>
        </div>
        <div className="input_container">
          <input
            className="register_input"
            type="text"
            value={register["firstname"]}
            onChange={(e) => registerFormHandler("fname", e.target.value)}
            placeholder="Firstname..."
          ></input>
          <span className="input_message">{errorMessage["firstname"]}</span>
        </div>
        <div className="input_container">
          <input
            className="register_input"
            type="text"
            value={register["surname"]}
            onChange={(e) => registerFormHandler("lname", e.target.value)}
            placeholder="Surname"
          ></input>
          <span className="input_message">{errorMessage["surname"]}</span>
        </div>
        <div className="date_container">
          <span>Date of Birth: </span>

          <DatePicker
            selected={register["dob"]}
            onSelect={(date) => {
              registerFormHandler("dob", date);
            }}
            onKeyDown={(e) => e.preventDefault()}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={15}
            scrollableYearDropdown
            dateFormat="dd/MM/yyyy"
            placeholderText="Date Of Birth"
          />
        </div>
        <div className="image_selecttag_container">
          <img src="/svg/girl.svg" alt="girl svg" className="register_svg" />
          <div className="select_btn_container">
            <div className="register_select_div">
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
                {countries.map((country, index) => (
                  <option
                    key={index}
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
          </div>
        </div>

        <Link to="/login">Already Registered? Login here</Link>
      </form>
    </section>
  );
};

export default RegistrationForm;
