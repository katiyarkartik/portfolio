import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skil from "./pages/Skil";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";

function App() {

  const [mode, setMode] = useState(false);
  const Theme = () => {
    setMode(!mode);
    alert(mode);
  };
  const [isPending, setPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 4200);
  });
  return (
    <>
      {isPending && <Loading />}
      {!isPending && (
        <div className="App">
          <Router>
            <Navbar status={mode}/>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skill" element={<Skil />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
