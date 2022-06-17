import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //初期状態設定
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //ログインフォーム
  const formSubmit = (e) => {
    e.preventDefault();
    //API取得(login)
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("/login", data)
      .then((response) => {
        console.log(response);
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
          <h3 className='text-center'>Login Account</h3>

          <form onSubmit={formSubmit}>
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
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
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
            <div className='form-group form-check'></div>
            <button type='submit' className='btn btn-primary btn-block'>
              Login
            </button>
            <br />
            Forget My Password <Link to='/forget'>Click Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
