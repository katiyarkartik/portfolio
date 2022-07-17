import React from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import Card from "../components/Card";

import "./Project.css";

const Project = () => {
  return (
    <AnimatedRoutes>
  
      <div className="project">
 
        <Card />
        <Card />
        <Card />
       
        
      </div>
    </AnimatedRoutes>
  );
};

export default Project;
