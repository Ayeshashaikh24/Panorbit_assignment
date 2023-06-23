import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import PostDetailsPage from './components/PostDetailsPage';
import GalleryPage from './components/GallaryPage';
import ToDoPage from './components/ToDoPage';
import "./App.js"
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [otherUsers, setOtherUsers] = useState([]);

  const handleSelectAccount = (user) => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar currentUser={currentUser} otherUsers={otherUsers} onSignOut={handleSignOut} />
        <Routes>
          <Route  path="/" element={   <LandingPage onSelectAccount={handleSelectAccount} />}/>
         
       
          <Route path="/profile" element={  <ProfilePage user={currentUser} />}>
          
          </Route>
          <Route path="/posts" element={<PostDetailsPage/>}>
           
          </Route>
          <Route path="/gallery" element={<GalleryPage/>}>
           
          </Route>
          <Route path="/todo" element={<ToDoPage/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
