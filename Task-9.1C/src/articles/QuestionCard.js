import React from 'react';

export default function QuestionCard({ question, expanded, onToggle, onDelete }) {
  const dateStr = question.createdAt
    ? new Date(question.createdAt).toLocaleString()
    : '—';

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="meta">{dateStr}</div>
          <h3 style={{ margin: '6px 0' }}>{question.title}</h3>
          <div className="meta">Tag: {question.tag || 'none'}</div>
        </div>

        <div className="row">
          <button className="btn" onClick={onToggle}>
            {expanded ? 'Collapse' : 'Expand'}
          </button>
          <button className="btn" onClick={onDelete}>Delete</button>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        {!expanded
          ? <div>{(question.description || '').slice(0, 140)}{(question.description || '').length > 140 ? '…' : ''}</div>
          : <div>{question.description || <i>No description</i>}</div>}
      </div>
    </div>
  );
}
