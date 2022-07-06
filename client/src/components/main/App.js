import React from "react";
import HomePage from "../pages/HomePage";
import RegistrationForm from "../general/RegistrationForm";
import LogIn from "../general/LogIn";

function App() {
  return (
    <>
      <h1>App</h1> <HomePage></HomePage>
      <LogIn />
      <RegistrationForm />
    </>
  );
}

export default App;
