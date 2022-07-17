import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import {motion} from "framer-motion";
const animations = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },

};
const AnimatedRoutes = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:0.3}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;
