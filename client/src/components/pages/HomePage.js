import React, { useEffect, useState } from "react";
const HomePage = () => {
  const [test, setTest] = useState("");
  useEffect(() => {
    const url = "https://cyf-devquad-edu-app.herokuapp.com/api/user";
    const callServer = async () => {
      const res = await fetch(url);
      const { message } = await res.json();
      setTest(message);
    };
    callServer();
  }, []);
  return <h1>{test}</h1>;
};

export default HomePage;
