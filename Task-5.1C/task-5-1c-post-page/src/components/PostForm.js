import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostForm.css';

const PostForm = () => {
  const [postType, setPostType] = useState('question');

  const hintText =
    postType === 'question'
      ? 'This form allows you to ask a question. For a question, please include a clear title, detailed description, and relevant tags.'
      : 'This form allows you to share an informative article. For an article, please include a descriptive title, engaging content, and appropriate tags.';

  return (
    <div className="post-container">
      <h3 className="section-header">Create a New Post</h3>

      <div className="toggle-row">
        <label className="toggle-label">Select Post Type:</label>
        <label className="radio-label">
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>

      <h4 className="section-header">What do you want to ask or share?</h4>
      <p className="hint-text">{hintText}</p>

      {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
    </div>
  );
};

export default PostForm;

