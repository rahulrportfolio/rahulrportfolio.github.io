import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Project from "./Project";
import Bio from "./Bio";
import Experience from "./Experience";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="mt-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="Bio" element={<Bio />} />
          <Route path="Experience" element={<Experience />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
