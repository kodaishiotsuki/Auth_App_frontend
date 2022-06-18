import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [message, setMessage] = useState("");

  //新規登録
  const formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConf,
    };

    axios
      .post("/register", data)
      .then((response) => {
        console.log(response);
        //localStorageにトークン保存
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        //profileページへ遷移
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className='row'>
        <div className='jumbotron col-lg-4 offset-lg-4'>
          <h3 className='text-center'>Register Account</h3>

          <form onSubmit={formSubmit}>
            <div className='form-group'>
              <label for='exampleInputEmail1'>User Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
                name='email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                name='password_confirmation'
                required
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Register
            </button>
            <br />
            Have an Account <Link to='/login'>Login Here</Link>
            <br />
            Forget My Password <Link to='/forget'>Click Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
