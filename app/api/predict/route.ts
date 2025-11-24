export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("http://portfolio_ai:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}
