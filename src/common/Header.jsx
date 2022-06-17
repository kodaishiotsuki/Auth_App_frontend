import React, { useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";
import { useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState([]);

  //ログインユーザー情報
  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(user);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar user={user} setUser={setUser} />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile' element={<Profile user={user} />} />
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
