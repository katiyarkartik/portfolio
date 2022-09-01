import React from "react";
import { useState } from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import Card from "../components/Card";
import CardData from "../components/CardData";
import "./Project.css";
import BasicExample from "../components/Card";
const Project = () => {
  const [data, setData] = useState(CardData);
  console.log(data);
  return (
    <AnimatedRoutes>
      <div className="row project-div">
     <BasicExample/>
      </div>{" "}
    </AnimatedRoutes>
  );
};

export default Project;
