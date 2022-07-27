import React, { useContext } from "react";
import TeacherContext from "../../context/teacher/TeacherContext";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import "../../styles/teacherDash.css";
const TeacherDashboard = () => {
  return (
    <article className="teacher_dash_art">
      <section className="dash_column">
        <ul className="dash_column_ul">
          <li className="dash_column_li">
            <NavLink
              to="modules"
              className={({ isActive }) => (isActive ? "test" : "")}
            >
              Modules
            </NavLink>
          </li>
          <li className="dash_column_li">
            <NavLink
              to="lessons"
              className={({ isActive }) => (isActive ? "test" : "")}
            >
              Lessons
            </NavLink>
          </li>
          <li className="dash_column_li">
            <NavLink
              to="submissions"
              className={({ isActive }) => (isActive ? "test" : "")}
            >
              Submissions
            </NavLink>
          </li>
          <li className="dash_column_li">
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? "test" : "")}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="dash_content">
        <Outlet></Outlet>
      </section>
    </article>
  );
};

export default TeacherDashboard;
