import React, { useEffect, useState } from "react";
const HomePage = () => {
  const [test, setTest] = useState("");
  useEffect(() => {
    const url = "http://localhost:5000/api/user";
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
