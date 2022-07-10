import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
