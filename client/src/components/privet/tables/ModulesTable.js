import React, { useContext } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
const ModulesTable = () => {
  const context = useContext(TeacherContext);
  const { modules, module } = context;
  return (
    <table className="modules_table">
      <thead>
        <tr>
          <td>__</td>
          <td>Name</td>
          <td>Description</td>
          <td>Date</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {modules.length === 0 ? (
          <tr>There is no modules</tr>
        ) : (
          modules.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.module_name}</td>
                <td>{item.moudule_description}</td>
                <td>{item.moudule_created_date}</td>
                <td>
                  <img src="/img/edit.png"></img>
                </td>
                <td>
                  <img src="/img/delete.png"></img>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default ModulesTable;
