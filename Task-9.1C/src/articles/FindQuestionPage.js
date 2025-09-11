import React, { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import QuestionCard from './QuestionCard';
import FilterBar from './FilterBar';

export default function FindQuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [filters, setFilters] = useState({ title: '', tag: '', from: '', to: '' });
  const [expandedId, setExpandedId] = useState(null);

  // live subscription to Firestore
  useEffect(() => {
    const q = query(collection(db, 'questions'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const rows = snap.docs.map(d => {
        const data = d.data();
        return {
          id: d.id,
          title: data.title || '',
          description: data.description || '',
          tag: data.tag || '',
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
        };
      });
      setQuestions(rows);
    });
    return () => unsub();
  }, []);

  // filters: title, tag, date range
  const filtered = useMemo(() => {
    return questions.filter(q => {
      const titleOk = filters.title ? q.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
      const tagOk   = filters.tag ? q.tag.toLowerCase().includes(filters.tag.toLowerCase()) : true;

      let dateOk = true;
      if (filters.from) dateOk = dateOk && q.createdAt && q.createdAt >= new Date(filters.from + 'T00:00:00');
      if (filters.to)   dateOk = dateOk && q.createdAt && q.createdAt <= new Date(filters.to + 'T23:59:59');

      return titleOk && tagOk && dateOk;
    });
  }, [questions, filters]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this question?')) return;
    await deleteDoc(doc(db, 'questions', id));
    if (expandedId === id) setExpandedId(null);
  };

  return (
    <div>
      <h2>Find Questions</h2>
      <FilterBar value={filters} onChange={setFilters} />

      {filtered.length === 0 && (
        <div className="card">No questions match your filters.</div>
      )}

      {filtered.map(q => (
        <QuestionCard
          key={q.id}
          question={q}
          expanded={expandedId === q.id}
          onToggle={() => setExpandedId(expandedId === q.id ? null : q.id)}
          onDelete={() => handleDelete(q.id)}
        />
      ))}
    </div>
  );
}
