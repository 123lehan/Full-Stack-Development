import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostForm from './PostForm';
import FindQuestionPage from './FindQuestionPage';

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <Link className="link" to="/">📝 Post</Link>
        <Link className="link" to="/find">🔍 Find Questions</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostForm />} />
          <Route path="/find" element={<FindQuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
}
