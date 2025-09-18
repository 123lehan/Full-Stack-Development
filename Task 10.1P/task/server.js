

const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.API_PORT || 5001;

app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));


app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email } = req.body || {};
  console.log('POST /api/newsletter/subscribe ->', email);
  try {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return res.status(400).send('Valid email required.');
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 465),
      secure: String(process.env.MAIL_SECURE || 'true') === 'true',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    const fromName = process.env.SENDER_NAME || 'DEV@Deakin';
    const fromEmail = process.env.SENDER_EMAIL || process.env.MAIL_USER;

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: email,
      subject: 'Welcome to DEV@Deakin Newsletter 🎉',
      text: `Hi! Thanks for subscribing to DEV@Deakin. You'll now receive updates.\n\nCheers,\n${fromName}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:16px;">
          <p>Hi!</p>
          <p>Thanks for subscribing to <strong>DEV@Deakin</strong>. You'll now receive updates.</p>
          <p>Cheers,<br/>${fromName}</p>
        </div>
      `,
    });

    res.status(200).send('Subscribed.');
  } catch (err) {
    console.error('Mailer error:', err && err.response ? err.response : err);
    res.status(500).send('Failed to subscribe.');
  }
});

app.listen(PORT, () => {
  console.log(`Newsletter server running on http://localhost:${PORT}`);
});
