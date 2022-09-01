import React from "react";
import logo from "../images/logo.png";
import "./Carousel.css";
import img1 from "../images/1720.jpg";
import img2 from "../images/projects/vsa0.png"
import img3 from "../images/projects/tca0.png"
import img4 from "../images/projects/ec.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
const Carousel = () => {
  return (
    <div className="c">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators" color="#fff" zIndex="2">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>

          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block  image" src={img2} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={img3} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block image " src={img4} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <IoIosArrowBack color="#ffffff" zIndex="2" fontSize={"40px"} />
          <span className="sr-only">Previous</span>
        </a>

        {/* <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a> */}
        <a
          className="carousel-control-next "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <IoIosArrowForward color="#ffffff" zIndex="2" fontSize={"40px"} />
          <span className="sr-only">Previous</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
