import React, { useState } from "react";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import * as RiIcons from "react-icons/ri";

import logo from "../images/logo.png";
function Navbar({ mode }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div>
          <p className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
            <p className="logo-name"> Kartik Katiyar</p>
          </p>
        </div>
        <div className="right-nav">
          {/*ul */}

          <ul className="list-header">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="list-el">
                  <NavLink
                    to={item.path}
                    className="nav-icon "
                    activeClassName="nav-icon-active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/*ul*/}

          <Link to="#" className="menu-bars">
            <RiIcons.RiMenu3Fill onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineCloseCircle />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
