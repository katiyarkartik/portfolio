import React from "react";
import "./Home.css";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
import Carousel from "../components/Carousel";
import TechStack from "../components/TechStack";
const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="s-link">
          <ul className="s-link-list">
            <li>
              <AiIcon.AiFillGithub />
            </li>
            <li>
              <AiIcon.AiFillLinkedin />
            </li>
            <li>
              <BsIcon.BsFacebook />
            </li>
          </ul>
        </div>
        <div className="home-content">
          <div className="home-body">
            <div className="intro">
              <p>
                H<span className="intro-s">i,</span>
              </p>
              <p>
                I am <span className="intro-s name">Kartik Katiyar</span>
              </p>
              <p className="desig">Software Developer</p>
              <p className="bio">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{" "}
              </p>
              <div className="button">
                <button className="btn projects">Projects</button>
                <button className="btn resume">Resume</button>
              </div>
            </div>
          </div>
          <div className="right-home">
            <Carousel />
          </div>
        </div>
      </div>
      <hr color="#ffb510" className="sec-div"/>
      <div>
        <TechStack />
      </div>
    </>
  );
};

export default Home;
