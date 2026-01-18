# AI Chatbot Email Setup Guide

## Current Implementation

The chatbot now sends form submissions to **gioliviusa@gmail.com** using two methods:

### Method 1: Web3Forms (Recommended)
A free form submission service that sends emails without backend code.

### Method 2: Mailto Fallback
Opens the user's default email client as a backup.

---

## Setup Instructions

### Option A: Web3Forms (Recommended - No backend needed)

1. **Get Your Free API Key:**
   - Go to https://web3forms.com
   - Click "Get Started Free"
   - Enter your email: **gioliviusa@gmail.com**
   - Verify your email
   - Copy your Access Key

2. **Add Your API Key to the Code:**
   - Open `index.html`
   - Find TWO instances of: `access_key: 'YOUR_WEB3FORMS_KEY'`
   - Replace both with your actual key: `access_key: 'abc123your-key-here'`

3. **Test It:**
   - Refresh your website
   - Fill out a quote or audit form
   - Check your email at gioliviusa@gmail.com

**Benefits:**
- ✅ Free for up to 250 submissions/month
- ✅ No backend needed
- ✅ Emails arrive instantly
- ✅ Works on any hosting

---

### Option B: Alternative Services

If you prefer a different service, here are other options:

#### 1. **Formspree** (https://formspree.io)
   - Free: 50 submissions/month
   - Simple setup

#### 2. **EmailJS** (https://www.emailjs.com)
   - Free: 200 emails/month
   - More complex setup but more customizable

#### 3. **Getform** (https://getform.io)
   - Free: 100 submissions/month
   - Simple dashboard

---

## Current Email Format

### Quote Request Email:
```
Subject: New Quote Request from [Name]

New Quote Request from ApexStryke AI Chatbot

Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Service Interest: [Selected Service]
Project Details: [Description]

Submitted on: [Date & Time]
Source: Website AI Chatbot
```

### Audit Request Email:
```
Subject: New Website Audit Request from [Name]

New Website Audit Request from ApexStryke AI Chatbot

Name: [Customer Name]
Email: [Customer Email]
Website URL: [Website]

Submitted on: [Date & Time]
Source: Website AI Chatbot
```

---

## Testing

After setup, test both forms:

1. **Test Quote Form:**
   - Click chat button
   - Click "Get a Quote"
   - Fill in all fields
   - Submit
   - Check gioliviusa@gmail.com

2. **Test Audit Form:**
   - Click "Free Audit"
   - Fill in website URL and contact info
   - Submit
   - Check email

---

## Troubleshooting

**Emails not arriving?**
- Check spam/junk folder
- Verify API key is correct
- Check browser console for errors (F12)
- Make sure you verified your email with Web3Forms

**Mailto fallback opening?**
- This is normal if Web3Forms fails
- User's email client will open with pre-filled message
- They can send it manually

---

## Upgrade Options

For higher volume or advanced features:

**Web3Forms Pro:**
- $5/month
- 5,000 submissions/month
- File uploads
- Webhooks
- Custom integrations

**Or build custom backend:**
- Use Node.js/Express
- Use SendGrid, AWS SES, or Mailgun
- Full control over email formatting

---

## Support

If you need help with setup:
1. Check Web3Forms documentation
2. Open browser console (F12) to see errors
3. Test with your own email first before going live
