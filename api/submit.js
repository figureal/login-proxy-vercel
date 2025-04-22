export default async function handler(req, res) {
  // CORS headers cho phép frontend gọi tới
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Xử lý preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Chỉ xử lý POST
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log('Nhận form:', { username, password });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

