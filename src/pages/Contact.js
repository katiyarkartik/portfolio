import React from "react";
import "./Contact.css";
import {AiFillLinkedin} from "react-icons/ai";
import * as SiIcon from "react-icons/si";
import {GrInstagram} from "react-icons/gr"
import {TiSocialLinkedin} from "react-icons/ti"
import {BsGithub} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {SiLeetcode} from "react-icons/si"


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <ul className="contact-list">
          
          <li className="contact-list-element">
            <div classname="contact-logo">
             <BsGithub/>
            </div>
            
          </li>
          <li className="contact-list-element">
            <div classname="contact-logo">
            <AiFillLinkedin/>
            </div>
            
          </li>
          <li className="contact-list-element">
            <div classname="contact-logo">
              <BsFacebook/>
            </div>
           
          </li>
          <li className="contact-list-element">
            <div classname="contact-logo">
              <GrInstagram/>
            </div>
            
          </li>
          <li className="contact-list-element">
            <div classname="contact-logo">
            <SiLeetcode/>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
