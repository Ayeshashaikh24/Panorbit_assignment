import React from 'react';

function ProfilePage({ user }) {
  return (
    <div className="profile-page">
      <h1>Profile Details</h1>
      <div className="profile-details">
        <img src={user.profilepicture} alt="Profile" />
        <p>Full Name: {user.name}</p>
        <p>Username: {user.username}</p>
      </div>
      <div className="posts-details">
        <h2>Posts Details</h2>
        <p>Coming soon</p>
      </div>
      <div className="gallery">
        <h2>Gallery</h2>
        <p>Coming soon</p>
      </div>
      <div className="todo">
        <h2>To-Do</h2>
        <p>Coming soon</p>
      </div>
    </div>
  );
}

export default ProfilePage;
