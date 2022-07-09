import React from "react";
import "./Footer.css";
import * as HiIcons from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span className="footer-icon">
          <HiIcons.HiOutlineMailOpen />{" "}
        </span>
        KARTIKKTYR@GMAIL.COM
      </p>
    </div>
  );
};

export default Footer;
