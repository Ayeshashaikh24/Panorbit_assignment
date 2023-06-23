import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPage({ onSelectAccount }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the API endpoint
    fetch('https://panorbit.in/api/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id} onClick={() => onSelectAccount(user)}>
           
            <img src={user.profilepicture} alt="Profile" height='100px' />
           <p>{user.name}</p>
           
            
            <Link to={`/profile`}>View Profile</Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
