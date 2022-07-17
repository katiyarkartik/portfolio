import React from "react";
import "./TechStack.css";
import html from "../images/web/HTML.png";
import Js from "../images/web/Js.png";
import Css from "../images/web/CSS.png";
import reactimg from "../images/web/React.svg";
import firebase from "../images/web/Firebase.svg";
import Nodejs from "../images/web/nodejs.png";
import Ajax from "../images/web/Ajax.png";
import mongo from "../images/web/Mongo.png";
import Express from "../images/web/Express.png";
import blender from "../images/web/Blender.png";
import unity from "../images/web/unity.svg";
import bs from "../images/web/ReactBootstrap.png";
const TechStack = () => {
  return (
    <div className="tech">
      <div className="web frontend">
        <img src={reactimg} alt="" />
        <img src={Ajax} alt="" />
        <img src={Js} alt="" />
        <img src={bs} alt="" />
        
        <img src={html} alt="" />

        <img src={Css} alt="" />
      </div>
      <div className="web backend">
        <img src={firebase} alt="" />
        <img src={Nodejs} alt="" />
        <img src={mongo} alt="" />
        <img src={Express} alt="" />
      </div>
      <div className=" web blender">
        <img src={blender} alt="" />
        {/* <img src={unity} alt="" /> */}
      </div>
    </div>
  );
};

export default TechStack;
