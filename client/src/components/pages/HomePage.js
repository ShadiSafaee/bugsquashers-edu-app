import React from "react";
import Content from "../general/Content";
import Header from "../general/Header";
import "../../styles/homePage.css";
import Footer from "../general/Footer";
const HomePage = () => {
  return (
    <>
      <article className="homepage_art">
        <article className="header_main_art">
          <Header></Header>

          <video className="home_video" muted loop>
            <source src="/video/1.mp4" type="video/mp4"></source>
          </video>

          <Content></Content>
        </article>

        <Footer></Footer>
      </article>
    </>
  );
};

export default HomePage;
