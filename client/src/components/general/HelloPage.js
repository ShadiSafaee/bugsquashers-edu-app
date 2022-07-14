import React from "react";
import "../../styles/helloPage.css";
const Test = () => {
  console.log("first");
  return (
    <section className="hello_sec">
      <h1>We, as Bug Squashers help you to have fun and learn in here!</h1>
      <img src="/svg/boyquiz.svg" alt="hello svg" />
    </section>
  );
};

export default Test;
