import React from 'react';
import './HomePage.css';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to DEV@Deakin 🎓</h1>
      <p className="home-subtext">You have successfully logged in.</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;

