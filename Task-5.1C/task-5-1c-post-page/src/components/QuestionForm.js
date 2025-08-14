import React, { useState } from 'react';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, desc, tags });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Describe your problem</label>
        <textarea
          rows="6"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Tags</label>
        <input
          type="text"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <button type="submit" className="post-button">Post</button>
    </form>
  );
};

export default QuestionForm;
