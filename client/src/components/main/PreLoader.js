import React from "react";
import "../../styles/preloader.css";
const PreLoader = () => {
  return (
    <article className="preloader_cont">
      <div>
        <img src="/svg/boy2.svg" alt="preloader svg"></img>
        <h2>Loading...</h2>
      </div>
    </article>
  );
};

export default PreLoader;
