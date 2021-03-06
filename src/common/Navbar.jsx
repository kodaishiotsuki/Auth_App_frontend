import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  // console.log(user);

  //ログアウトボタンクリック
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Easy Learning
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              {localStorage.getItem("token") && (
                <Link className='nav-link' to='/profile'>
                  Profile
                </Link>
              )}
            </li>
          </ul>
          <span className='navbar-text'>
            <ul className='navbar-nav mr-auto'>
              {localStorage.getItem("token") ? (
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/'
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/register'>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
