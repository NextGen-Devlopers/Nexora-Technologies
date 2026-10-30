import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Services from "./Pages/Services/Services";
import Users from "./Pages/Users/Users";
import UserDetails from "./Pages/UserDetails/UserDetails";
import EditUser from "./Pages/EditUser/EditUser";
import Ourteam from "./Pages/Ourteam/Ourteam";
import Contactus from "./Pages/Contactus/Contactus";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:slug" element={<ProjectDetails />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Ourteam" element={<Ourteam />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
