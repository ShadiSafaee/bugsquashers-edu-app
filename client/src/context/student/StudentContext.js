import { createContext } from "react";

const StudentContext = createContext({
  modules: [],
  setModules: () => {},
  getModulesHandler: () => {},
  ModuleHandler: () => {},
  lessons: [],
  setLessons: () => {},
});

export default StudentContext;
