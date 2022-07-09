import React from "react";
import { ProjectsData } from "./ProjectsData";
import { NavLink } from "react-router-dom";
import "./Card.css";
const Card = () => {
  return (
    <div>
      {ProjectsData.map((item, index) => {
        return (
          <li key={index} className="cad">
            {item.title}
            <img src={item.pic} />
          </li>
        );
      })}
    </div>
  );
};

export default Card;
