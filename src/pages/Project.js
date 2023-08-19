import React, { useState, useEffect } from "react";
import "./Project.css";
import data from "../pages/ProjectCard";

const Project = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  ///

  return (
    <div className="project-list">
      {data.map((data) => (
        <div key={data.id} className="project-card">
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/17118488/pexels-photo-17118488/free-photo-of-sea-black-and-white-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             
            />
          </div>
          <div className="project-name">{data.name}</div>

          <div className="rating">{data.description}</div>

          <p>{data.link}</p>
          <div className="add-to-cart">
            <button>View Project</button><button>View Code</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
