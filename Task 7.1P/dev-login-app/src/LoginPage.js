import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError('');

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/home'); // Redirect to homepage
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">DEV@Deakin Login</h2>
      <div className="login-form">
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="login-error">{error}</p>}
      </div>
      <div className="signup-redirect">
  <p>Don’t have an account?</p>
  <button className="signup-button" onClick={() => navigate('/signup')}>
    Sign Up
  </button>
</div>
    </div>
    
  );
}

export default LoginPage;
