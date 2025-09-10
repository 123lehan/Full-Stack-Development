import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function QuestionForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc]   = useState('');
  const [tag, setTag]     = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    await addDoc(collection(db, "questions"), {
      title, description: desc, tag, createdAt: serverTimestamp()
    });
    setTitle(''); setDesc(''); setTag('');
    alert("Question saved!");
  };

  return (
    <form className="card" onSubmit={onSubmit}>
      <h3>Post a Question</h3>
      <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="textarea" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
      <input className="input" placeholder="Tag" value={tag} onChange={e=>setTag(e.target.value)} />
      <button className="btn primary" type="submit">Save</button>
    </form>
  );
}
