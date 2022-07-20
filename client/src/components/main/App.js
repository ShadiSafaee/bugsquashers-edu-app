import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";

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
import TeacherDashboard from "../privet/TeacherDashboard";
import ModulesTable from "../privet/tables/ModulesTable";
import EditModule from "../privet/EditModule";
import NewModule from "../privet/NewModule";
import LessonsTable from "../privet/tables/LessonsTable";
import NewLesson from "../privet/NewLesson";
import EditLesson from "../privet/EditLesson";
import UserProfile from "../privet/UserProfile";
import SContext from "../../context/student/SContext";
import StudentInfo from "../privet/StudentInfo";
import Quize from "../privet/Quize";
function App() {
  // const { user } = useContext(SyntaxContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HelloPage />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<LogOut />}></Route>

          <Route path="dashboard" element={<PrivetLayout />}>
            <Route index element={<HelloPage />} />
            <Route
              path="teacher"
              element={
                <Tcontext>
                  <Teacher></Teacher>
                </Tcontext>
              }
            >
              <Route
                path=":name"
                element={<TeacherDashboard></TeacherDashboard>}
              >
                <Route path="modules" element={<ModulesTable />}>
                  <Route
                    path="edit-module/:id"
                    element={<EditModule></EditModule>}
                  />
                  <Route path="new-module" element={<NewModule></NewModule>} />
                </Route>
                <Route path="lessons" element={<LessonsTable></LessonsTable>}>
                  <Route path="new-lesson" element={<NewLesson></NewLesson>} />
                  <Route
                    path="edit-lesson/:id"
                    element={<EditLesson></EditLesson>}
                  />
                </Route>
              </Route>
            </Route>
            <Route
              path="student"
              element={
                <SContext>
                  <Student />
                </SContext>
              }
            >
              <Route path=":name" element={<UserProfile />}>
                <Route path="info" element={<StudentInfo />} />
                <Route path="quize" element={<Quize />} />
              </Route>
            </Route>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
