import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
