import { getStore } from "@netlify/blobs";

// GET /.netlify/functions/stats?key=<STATS_KEY>  -> az összes naplózott látogatás JSON-ben.
// A STATS_KEY-t a Netlify környezeti változói között kell megadni.
export default async (req) => {
  const secret = Netlify.env.get("STATS_KEY");
  const given = new URL(req.url).searchParams.get("key");
  if (!secret || given !== secret) return new Response("Forbidden", { status: 403 });

  const store = getStore("visits");
  const { blobs } = await store.list();
  const visits = (await Promise.all(blobs.map((b) => store.get(b.key, { type: "json" })))).filter(Boolean);
  visits.sort((a, b) => a.ts.localeCompare(b.ts));

  return Response.json({ count: visits.length, visits });
};
