import React, { useContext, useEffect } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const ModulesTable = () => {
  const context = useContext(TeacherContext);
  const {
    modules,
    showEdit,
    setShowEdit,
    deleteModuleHandler,
    getModulesHandler,
  } = context;
  useEffect(() => {
    getModulesHandler();
  }, [deleteModuleHandler]);
  return (
    <>
      <h1 className="dash_header">
        Modules
        <Link
          to="new-module"
          className="dash_add_btn btn"
          onClick={() => setShowEdit(true)}
        >
          Add new
        </Link>
      </h1>
      <table className="modules_table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Description</td>
            <td>Date</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {modules.length === 0 ? (
            <tr>
              <td> There is no modules</td>
            </tr>
          ) : (
            modules.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.module_name}</td>
                  <td>{item.module_description}</td>
                  <td>{item.module_created_date}</td>
                  <td>
                    <Link
                      to={`edit-module/${item.id}-${item.module_name}`}
                      onClick={() => setShowEdit(true)}
                    >
                      <img src="/img/edit.png" alt="edit png"></img>
                    </Link>
                  </td>
                  <td>
                    <img
                      src="/img/delete.png"
                      alt="delete png"
                      onClick={() => deleteModuleHandler(item.id)}
                    ></img>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {showEdit && (
        <>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
};

export default ModulesTable;
