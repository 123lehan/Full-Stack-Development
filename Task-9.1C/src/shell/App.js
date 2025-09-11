import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// Login project pages
import LoginPage from '../login/LoginPage';
import SignupPage from '../login/SignupPage';

// Home project
import HomeApp from '../home/App';

// Articles project pages
import PostForm from '../articles/PostForm';
import FindQuestionPage from '../articles/FindQuestionPage';

import '../articles/styles.css';

function HomeWrapper() {
  const navigate = useNavigate();
  return (
    <div>
      <HomeApp />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <button
          onClick={() => navigate('/next')}
          style={{
            padding: '12px 20px', borderRadius: 12, border: 'none',
            fontSize: 16, cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          Go to Next Page ➜
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomeWrapper />} />
      <Route path="/next" element={<PostForm />} />
      <Route path="/next/find" element={<FindQuestionPage />} />
      <Route path="*" element={
        <div style={{ padding: 24 }}>
          <h2>Not Found</h2>
          <p><Link to="/">Back to Login</Link></p>
        </div>
      } />
    </Routes>
  );
}
