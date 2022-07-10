import { createContext } from "react";

const Context = createContext({
  mobileNavClass: false,
  setMobileNavClass: () => {},
  login: {},
  setLogin: () => {},
  register: {},
  setRegister: () => {},
  loginHandler: () => {},
  registerHandler: () => {},
  loginFormHandler: () => {},
  registerFormHandler: () => {},
});
export default Context;
