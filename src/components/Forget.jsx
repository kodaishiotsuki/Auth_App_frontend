import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //パスワード忘れたフォーム
  const formSubmit = (e) => {
    e.preventDefault();

    //API取得(login)
    const data = {
      email: email,
    };
    axios
      .post("/forgetpassword", data)
      .then((response) => {
        setMessage(response.data.message);
        document.getElementById("forgetform").reset();
      })
      .catch((error) => {
        // console.log(error);
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
          <h3 className='text-center'>Forget Password</h3>

          <form onClick={formSubmit} id='forgetform'>
            {error}
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
            {/* <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input type='password' className='form-control' />
            </div>
            <div className='form-group form-check'></div> */}
            <button type='submit' className='btn btn-primary btn-block'>
              Forget Password
            </button>
            <br />
            Have an Account <Link to='/login'>Login Here</Link>
            <br />
            Don't have Account? <Link to='/register'>Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
