import React from 'react';

function ProfilePage({ user }) {
  return (
    <div className="profile-page">
      <h1>Profile Details</h1>
      <div className="profile-details">
        <img src={user.profilepicture} alt="Profile" height="100px" />
        <p>Full Name: {user.name}</p>
        <p>Username: {user.username}</p>
        
            <p>email:    {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          <hr></hr>
          <div>Company Details</div>
            <p>Name: {user.company.name}</p>
            <p>catchPhrase: {user.company.catchPhrase}</p>
            <p>Bs: {user.company.bs}</p>
            <hr></hr>
            <p>Address</p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
           

      </div>
     
    </div>
  );
}

export default ProfilePage;
