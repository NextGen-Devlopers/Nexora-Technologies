import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Services from "./Pages/Services/Services";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
