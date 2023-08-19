import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdTask } from "react-icons/md";


export const ProjectData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/project",
    icon: <MdTask />,
    cName: "nav-text",
  },
];
