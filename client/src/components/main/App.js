import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "../general/LogIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
