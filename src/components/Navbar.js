import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
function Navbar({ currentUser, otherUsers, onSignOut }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/todo">To-Do</Link>
        </li>
        <li>
          <div className="profile-account" onClick={handleDropdownToggle}>
            {/* <img src={currentUser.profilepicture} alt="Profile" /> */}
          </div>
          {showDropdown && (
            <div className="profile-dropdown">
              <img src={currentUser.profilepicture} alt="Profile" />
              <p>Full Name: {currentUser.name}</p>
              <p>Username: {currentUser.username}</p>
              <ul className="other-users">
                {otherUsers.map((user) => (
                  <li key={user.id}>
                    <img src={user.profilepicture} alt="Profile" />
                    <p>{user.username}</p>
                  </li>
                ))}
              </ul>
              <button onClick={onSignOut}>Sign Out</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
