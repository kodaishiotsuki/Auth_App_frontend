import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [message, setMessage] = useState("");

  //リセットフォーム
  const formSubmit = (e) => {
    e.preventDefault();

    const data = {
      token: token,
      email: email,
      password: password,
      password_confirmation: passwordConf,
    };

    axios
      .post("/resetpassword", data)
      .then((response) => {
        // console.log(response);
        setMessage(response.data.message);
        document.getElementById("forgetform").reset();
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  let error = "";
  if (message) {
    error = message && (
      <>
        <div className='alert alert-danger' role='alert'>
          {message}
        </div>
      </>
    );
  }
  return (
    <div>
      <br />
      <br />
      <div className='row'>
        <div className='jumbotron col-lg-4 offset-lg-4'>
          <h3 className='text-center'>Reset Account</h3>

          <form onSubmit={formSubmit} id='reset_form'>
            {error}
            <div className='form-group'>
              <label for='exampleInputEmail1'>Pin Code</label>
              <input
                type='text'
                className='form-control'
                name='token'
                required
                onChange={(e) => setToken(e.target.value)}
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
              <label for='exampleInputPassword1'>New Password</label>
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
              Reset Password
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

export default Reset;
