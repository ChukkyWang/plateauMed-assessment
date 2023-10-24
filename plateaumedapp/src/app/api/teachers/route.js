export async function GET(request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request) {
  const data = await request;
  console.log(request);
  return new Response({ data });
}
