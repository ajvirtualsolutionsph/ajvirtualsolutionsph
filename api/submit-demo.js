// api/submit-demo.js
// Vercel Serverless Function — Node 18+ runtime (native fetch available, no npm install needed)

export default async function handler(req, res) {
  // CORS headers — same origin on Vercel so not strictly required,
  // but allows local dev (e.g. Live Server on a different port) to work.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message, serviceInterest, preferredContactTime } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const NOTION_API_TOKEN   = process.env.NOTION_API_TOKEN;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_API_TOKEN || !NOTION_DATABASE_ID) {
    console.error('Missing Notion environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const properties = {
    Name: {
      title: [{ text: { content: name } }]
    },
    Email: {
      email: email
    },
    Message: {
      rich_text: [{ text: { content: message } }]
    },
    'Preferred Contact Time': {
      rich_text: preferredContactTime
        ? [{ text: { content: preferredContactTime } }]
        : []
    },
    'Submitted At': {
      date: { start: new Date().toISOString() }
    }
  };

  // Only include Service Interest if a value was selected — Notion rejects null selects
  if (serviceInterest) {
    properties['Service Interest'] = { select: { name: serviceInterest } };
  }

  const notionPayload = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties
  };

  try {
    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(notionPayload)
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.json();
      console.error('Notion API error:', errorData);
      return res.status(502).json({ error: errorData.message || JSON.stringify(errorData) });
    }

    return res.status(200).json({ success: true, message: 'Submission received!' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
