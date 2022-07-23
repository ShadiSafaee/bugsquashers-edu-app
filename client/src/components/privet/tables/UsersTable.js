import React, { useContext, useEffect } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const UsersTable = () => {
  const context = useContext(TeacherContext);
  const navigate = useNavigate();
  const { users, setUsers, getAllUsers, userRoleHandler } = context;
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1 className="dash_header">All Users</h1>
      <div className="table_cont">
        <table className="modules_table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>D.O.B</td>
              <td>Country</td>
              <td>Role</td>
              <td>Edit-Role</td>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td> There is no user</td>
              </tr>
            ) : (
              users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstname + " " + item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{item.country}</td>
                    <td>{item.role}</td>
                    {item.role !== "admin" ? (
                      <td>
                        <select
                          value={item.role}
                          onChange={(e) => {
                            userRoleHandler(item.id, e.target.value);
                          }}
                        >
                          <option value="student">student</option>

                          <option value="teacher">teacher</option>
                        </select>
                      </td>
                    ) : (
                      <td>Admin</td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
