import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/userprofile.css";

const UserProfile = () => {
  return (
    <article className="user_profile_article">
      <section className="user_col_section">
        <ul>
          <li className="reg_col">
            <NavLink
              to="info"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          </li>
          <li className="scores_col">
            <NavLink to="" className={(x) => (x.isActive ? "active" : "")} end>
              Quiz
            </NavLink>
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
