import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/forget' element={<Forget />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
