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
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
