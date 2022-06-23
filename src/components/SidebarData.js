import React from "react";
import * as RiIcon from "react-icons/ri";
import * as AiIcon from "react-icons/ai";
import * as MdIcon from "react-icons/md";
import * as BiIcon from "react-icons/bi";
import * as GrIcon from "react-icons/gr";
import * as FaIcon from "react-icons/fa";
import * as BsIcon from "react-icons/bs";
import * as SiIcon from "react-icons/si";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcon.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcon.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skill",
    icon: <SiIcon.SiCodesandbox />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/project",
    icon: <MdIcon.MdTask />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiIcon.RiMessage2Fill />,
    cName: "nav-text",
  },
 
];
