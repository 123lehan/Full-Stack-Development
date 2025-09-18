import React, { useState } from 'react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const validateEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!validateEmail(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error(await res.text());

      setStatus({ type: 'success', msg: 'Thanks! Check your inbox.' });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={{ margin: 0 }}>Subscribe to our Newsletter</h3>
      <p style={{ margin: '6px 0 12px' }}>
        Get updates from DEV@Deakin straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} style={styles.row}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          disabled={loading}
          required
        />
        <button type="submit" style={styles.btn} disabled={loading}>
          {loading ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      {status.msg && (
        <div
          style={{
            marginTop: 8,
            color: status.type === 'error' ? '#b00020' : '#0a7a0a',
            fontSize: 14,
          }}
        >
          {status.msg}
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    padding: 16,
    background: '#fff',
    maxWidth: 520,
  },
  row: { display: 'flex', gap: 8 },
  input: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    outline: 'none',
  },
  btn: {
    padding: '10px 14px',
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    background: '#111827',
    color: '#fff',
    minWidth: 120,
  },
};
