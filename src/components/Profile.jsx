import React from "react";

const Profile = ({ user }) => {
  return (
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
  );
};

export default Profile;
