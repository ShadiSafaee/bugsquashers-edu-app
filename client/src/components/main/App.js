import React, { useContext } from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SyntaxContext from "../../context/user/SyntaxContext";
import LogIn from "./LogIn";
import Register from "./Register";
import LogOut from "./LogOut";
import HelloPage from "../general/HelloPage";
// import Error404 from "./Error404";
import PrivetLayout from "../privet/PrivetLayout";
import Teacher from "../privet/Teacher";
import Student from "../privet/Student";
import Admin from "../privet/Admin";
import Tcontext from "../../context/teacher/TContext";
function App() {
  // const { user } = useContext(SyntaxContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<HelloPage />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<LogOut />}></Route>

          <Route path="dashboard" element={<PrivetLayout />}>
            {/* <Route path="" element={<HelloPage />} />
            <Route
              path="teacher"
              element={
                <Tcontext>
                  <Teacher />
                </Tcontext>
              }
            />
            <Route path="student" element={<Student />} />
            <Route path="admin" element={<Admin />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
