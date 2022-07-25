import React, { useContext } from "react";
import TeacherContext from "../../context/teacher/TeacherContext";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/teacherDash.css";
const TeacherDashboard = () => {
  return (
    <article className="teacher_dash_art">
      <section className="dash_column">
        <ul className="dash_column_ul">
          <li className="dash_column_li">
            <Link to="modules">Modules</Link>
          </li>
          <li className="dash_column_li">
            <Link to="lessons">Lessons</Link>
          </li>
          <li className="dash_column_li">
            <Link to="submissions">Submissions</Link>
          </li>
          <li className="dash_column_li">
            <Link to="users">Users</Link>
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
