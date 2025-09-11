import React, { useState } from 'react';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';


function SignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      
      navigate('/home');

      
      try {
        await addDoc(collection(db, "users"), {
          uid: userCredential.user.uid,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          createdAt: new Date()
        });
      } catch (firestoreError) {
        console.warn(" Firestore write failed:", firestoreError);
      }

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
  <h2 className="signup-header">Create a DEV@Deakin Account</h2>
  <div className="signup-form">
    <input name="firstName" placeholder="First Name" onChange={handleChange} />
    <input name="lastName" placeholder="Last Name" onChange={handleChange} />
    <input name="email" placeholder="Email" onChange={handleChange} />
    <input name="password" type="password" placeholder="Password" onChange={handleChange} />
    <input name="confirm" type="password" placeholder="Confirm Password" onChange={handleChange} />
    <button className="signup-button" onClick={handleSignup} disabled={loading}>
      {loading ? 'Creating...' : 'Create'}
    </button>
    {error && <p className="signup-error">{error}</p>}
  </div>
</div>

  );
}

export default SignupPage;
