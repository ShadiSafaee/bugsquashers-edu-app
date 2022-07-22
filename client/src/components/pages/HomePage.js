import React, { useContext } from "react";
import Content from "../general/Content";
import SyntaxContext from "../../context/user/SyntaxContext";
import Header from "../general/Header";
import "../../styles/homePage.css";
import Footer from "../general/Footer";
import PreLoader from "../main/PreLoader";
import "../../styles/preloader.css";
const HomePage = () => {
  const { preloader, user } = useContext(SyntaxContext);
  const { role } = user;
  return (
    <>
      {preloader && <PreLoader></PreLoader>}
      <article className="homepage_art">
        <article className="header_main_art">
          {role === "student" ? (
            <img
              src="/img/student.jpg"
              alt="student background"
              className="home_video"
            ></img>
          ) : role === "admin" ? (
            <img
              src="/img/admin.jpg"
              className="home_video"
              alt="admin background"
            ></img>
          ) : role === "teacher" ? (
            <img
              src="/img/teacher.jpg"
              alt="teacher background"
              className="home_video"
            ></img>
          ) : (
            <video className="home_video" muted loop autoPlay>
              <source src="/video/1.mp4" type="video/mp4"></source>
            </video>
          )}

          <div className="video_layer">
            <Header></Header>
            <Content></Content>
          </div>
        </article>

        <Footer></Footer>
      </article>
    </>
  );
};

export default HomePage;
