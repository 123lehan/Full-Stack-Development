import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

export default function PostForm() {
  const [tab, setTab] = useState('question');

  return (
    <div>
      <div className="btnGroup">
        <button className={`btn ${tab==='question' ? 'primary':''}`} onClick={() => setTab('question')}>Post Question</button>
        <button className={`btn ${tab==='article' ? 'primary':''}`} onClick={() => setTab('article')}>Post Article</button>
      </div>
      <div style={{ marginTop: 20 }}>
        {tab === 'question' ? <QuestionForm /> : <ArticleForm />}
      </div>
    </div>
  );
}
