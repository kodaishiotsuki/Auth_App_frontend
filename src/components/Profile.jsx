import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }
  });

  return (
    <>
      <div>
        <br />
        <br />
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>User Profile</h3>

            <ul class='list-group'>
              <li className='list-group-item'>Name : {user.name} </li>
              <li className='list-group-item'>Email : {user.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
