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
  errorMessage: {},
  setErrorMessage: () => {},
  preLoader: false,
  setPreLoader: () => {},
  user: {},
  setUser: () => {},
  logOutHandler: () => {},
  auth: () => {},
  isAuth: false,
  setIsAuth: () => {},
});
export default Context;
