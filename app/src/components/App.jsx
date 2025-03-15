import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Project from "./Project";
import Bio from "./Bio";
import Experiance from "./Experiance";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="mt-60">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="Bio" element={<Bio />} />
          <Route path="Experiance" element={<Experiance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
