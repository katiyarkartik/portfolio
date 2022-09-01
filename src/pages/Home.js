import React from "react";
import "./Home.css";
import * as AiIcon from "react-icons/ai";
import * as SiIcon from "react-icons/si";
import * as BsIcon from "react-icons/bs";
import Carousel from "../components/Carousel";
import TechStack from "../components/TechStack";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedRoutes from "../components/AnimatedRoutes";
const Home = () => {
  return (
    <AnimatedRoutes>
      <div>
        <div className="home-page">
          <div className="s-link">
            <ul className="s-link-list">
              <a href="https://github.com/katiyarkartik">
                <li>
                  <AiIcon.AiFillGithub />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/kartik-katiyar-71096a1a0/">
                <li>
                  <AiIcon.AiFillLinkedin />
                </li>
              </a>
              <a href="https://leetcode.com/kartikktyr/">
                <li>
                  <SiIcon.SiLeetcode />
                </li>
              </a>
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
                  Software Developer | WEB DEVELOPMENT : HTML , CSS ,Javascript
                  ,ReactJs , Bootstrap, NodeJs, MongoDB, ExpressJs | C++ , Data
                  Structures and Algorithms
                </p>
                <div className="btn">
                  <NavLink to="/project">
                    <button>Projects</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="right-home">
              <Carousel />
            </div>
          </div>
        </div>
        {/* <hr color="#ffb510" className="sec-div"/> */}
        {/* <div>
        <TechStack />
      </div>
     */}
        <TechStack />
      </div>
    </AnimatedRoutes>
  );
};

export default Home;
