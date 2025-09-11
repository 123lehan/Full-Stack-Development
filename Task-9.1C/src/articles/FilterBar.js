import React from 'react';

export default function FilterBar({ value, onChange }) {
  const set = (k, v) => onChange({ ...value, [k]: v });

  return (
    <div className="card">
      <div className="row">
        <input
          className="input"
          placeholder="Filter by title…"
          value={value.title}
          onChange={e => set('title', e.target.value)}
        />
        <input
          className="input"
          placeholder="Filter by tag…"
          value={value.tag}
          onChange={e => set('tag', e.target.value)}
        />
      </div>

      <div className="row">
        <div>
          <div className="meta">From</div>
          <input
            className="input"
            type="date"
            value={value.from}
            onChange={e => set('from', e.target.value)}
          />
        </div>
        <div>
          <div className="meta">To</div>
          <input
            className="input"
            type="date"
            value={value.to}
            onChange={e => set('to', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
