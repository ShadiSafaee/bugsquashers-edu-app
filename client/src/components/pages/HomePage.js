import React, { useEffect, useState } from "react";
import Header from "../general/Header";
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
  return (
    <>
      <article className="homepage_art">
        <article className="header_main_art">
          <Header></Header>
          <article className="main"></article>
        </article>
      </article>
    </>
  );
};

export default HomePage;
