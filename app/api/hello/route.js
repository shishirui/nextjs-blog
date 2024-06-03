export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, world!' }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    const data = await request.json();
    return new Response(JSON.stringify({ message: `You sent: ${data.message}` }), {
        headers: { 'Content-Type': 'application/json' },
    });
}