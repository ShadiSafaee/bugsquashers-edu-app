import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "../general/LogIn";
import Register from "../general/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
