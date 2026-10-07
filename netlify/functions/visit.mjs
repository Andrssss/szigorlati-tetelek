import { getStore } from "@netlify/blobs";

const clip = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const now = new Date();
  const visit = {
    ts: now.toISOString(),
    visitor: clip(body.visitor, 64),
    page: clip(body.page, 200),
    referrer: clip(body.referrer, 300),
    screen: clip(body.screen, 20),
    lang: clip(body.lang, 20),
    ua: clip(req.headers.get("user-agent"), 300),
  };

  // Minden látogatás külön blob (nincs írási ütközés); a kulcs időrendben rendezhető.
  const key = `${visit.ts}-${crypto.randomUUID().slice(0, 8)}`;
  await getStore("visits").setJSON(key, visit);

  return new Response(null, { status: 204 });
};
