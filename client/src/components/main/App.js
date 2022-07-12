import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LogIn from "../privet/LogIn";
import Register from "../privet/Register";
import LogOut from "../privet/LogOut";
import HelloPage from "../general/HelloPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<HelloPage />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<LogOut />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
