import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import StudentContext from "../../context/student/StudentContext";
import "../../styles/userprofile.css";

const UserProfile = () => {
  return (
    <article className="user_profile_article">
      <section className="user_col_section">
        <ul>
          <li className="reg_col">
            <Link to="info">Profile</Link>
          </li>
          <li className="scores_col">
            <Link to="quiz">Quiz</Link>
          </li>
        </ul>
      </section>
      <section className="user_content_section">
        <Outlet />
      </section>
    </article>
  );
};

export default UserProfile;
