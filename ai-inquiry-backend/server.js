require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/inquiry', async (req, res) => {
  const formData = req.body;

  // 1. Ask OpenAI to summarize the inquiry
  const aiResponse = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant for a web agency.' },
      { role: 'user', content: `A new inquiry was received: ${JSON.stringify(formData)}` }
    ]
  });

  // 2. Send an email with the summary
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS  // your Gmail app password
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'support@apexstryke.com',
    subject: 'New Landing Page Inquiry',
    text: `Inquiry details:\n${JSON.stringify(formData, null, 2)}\n\nAI Summary:\n${aiResponse.choices[0].message.content}`
  });

  res.json({ success: true, message: 'Inquiry received and processed by AI.' });
});

app.listen(3001, () => console.log('Server running on port 3001'));

