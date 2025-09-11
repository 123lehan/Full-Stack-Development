import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // keep user state in sync so we can show the Sign out button
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/home'); // Redirect to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      // Optional: navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">DEV@Deakin Login</h2>

      {user && (
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 8 }}>Signed in as {user.email}</span>
          <button className="signout-button" onClick={handleSignOut}>Sign out</button>
        </div>
      )}

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
