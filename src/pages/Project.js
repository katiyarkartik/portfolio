import React from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import Card from "../components/Card";
 
import "./Project.css";

const Project = () => {
  return (
    <AnimatedRoutes>
      <div className="project">
        {/* <div className="title">Scheduler App</div> */}
        <Card />
        <br />
        {/* <div className="title">Scheduler App</div> */}
        <Card />
      
      </div>
    </AnimatedRoutes>
  );
};

export default Project;
