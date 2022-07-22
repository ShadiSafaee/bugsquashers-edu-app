import React, { useContext } from "react";
import SyntaxContext from "../../context/user/SyntaxContext";
import "../../styles/studentinfo.css";

const StudentInfo = () => {
  const { user } = useContext(SyntaxContext);
  const { firstname, surname, email, dob, country, role } = user;

  return (
    <article className="student_info_article">
      <section className="student_info_section">
        <table className="student_info_table">
          <thead>
            <tr>
              <th colSpan="2">Student Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Firstname</td>
              <td>{firstname}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{surname}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{new Date(dob).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{role}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn edit_profile_btn">Edit Profile</button>
      </section>
      <section className="student_score_section">Student Scores</section>
    </article>
  );
};

export default StudentInfo;
