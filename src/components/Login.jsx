import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <br />
      <br />
      <div className='row'>
        <div className='jumbotron col-lg-4 offset-lg-4'>
          <h3 className='text-center'>Login Account</h3>

          <form>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
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
                id='exampleInputPassword1'
              />
            </div>
            <div className='form-group form-check'></div>
            <button type='submit' className='btn btn-primary btn-block'>
              Submit
            </button>
            <br />
            Forget My Password <Link to="/forget">Click Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
