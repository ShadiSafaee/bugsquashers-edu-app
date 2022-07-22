import React from "react";
import "../../styles/content.css";
import { Outlet } from "react-router";
const Content = () => {
  return (
    <article className="content_art">
      <Outlet></Outlet>
    </article>
  );
};

export default Content;
