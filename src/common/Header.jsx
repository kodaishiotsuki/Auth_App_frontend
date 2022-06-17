import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
