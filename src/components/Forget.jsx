import React from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <div>
      <br />
      <br />
      <div className='row'>
        <div className='jumbotron col-lg-4 offset-lg-4'>
          <h3 className='text-center'>Forget Password</h3>

          <form>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input type='password' className='form-control' />
            </div>
            <div className='form-group form-check'></div>
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
