import React from "react";
import "./About.css";
import img from "../images/nagarro-logo.png";
import { IoIosSchool } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import dp from "../images/profilepic.jpeg";
import AnimatedRoutes from "../components/AnimatedRoutes";
const About = () => {
  return (
    <AnimatedRoutes>
      <div className="about">
        <h1 className="about-me">About Me</h1>

        <div className="details">
          <p className="bio" style={{ textAlign: "center", marginTop: "20px" }}>
            I am Kartik Katiyar ,a tech enthusiast, I have great interest in
            programming, web development.
          </p>
        </div>
        <div className="skills">
        <h3>Skills</h3>
        <p>C++, Web Development, Machine Learning </p>
        </div>
        <div className="sub-heading">
          <IoIosSchool />
          <span>Education</span>
        </div>
        <div className="edu">
          <div className="edu-list">
            <p className="school-name">
              Bharati Vidyapeeth's college of Engineering
            </p>
            <p>B.Tech in Information Technology</p>
            <p>
              <em>CGPA: 9.03</em>
            </p>
            <p>
              <BsCalendarDate /> 2019-2023
            </p>
          </div>

          <br />
          <div className="edu-list">
            <p className="school-name">Greenway modern school</p>
            <p> XII class</p>
            <p>
              <em>Percentage: 89.60%</em>
            </p>
            <p>
              <BsCalendarDate /> 2017-2018
            </p>
          </div>
          <br />
          <div className="edu-list">
            <p className="school-name">Greenway modern school</p>
            <p> X class</p>
            <p>
              <em>CGPA: 10.00</em>
            </p>
            <p>
              <BsCalendarDate /> 2015-2016
            </p>
          </div>
        </div>
        {/* djvd */}
        <div className="sub-heading">
          <MdOutlineWork />
          <span>Experience</span>
        </div>
        <div className="exp-list">
          <div className="exp">
            <p className="exp-img">
              <img src={img} alt="" />
            </p>
            <p className="company-name">Software intern at Nagarro</p>
          </div>
        </div>
        {/* dhvbdvb */}
        {/* <div className="sub-heading">
          <TbCertificate />
          <span> Certifiactions</span>
        </div> */}

        <ul></ul>
      </div>
    </AnimatedRoutes>
  );
};

export default About;
