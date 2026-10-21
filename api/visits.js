// ─────────────────────────────────────────────────────────────────────────────
// Visit counter: a Vercel Function served at /api/visits.
//
//   POST /api/visits  → adds one visit and returns the new total
//   GET  /api/visits  → returns the current total without changing it
//
// The total lives in an Upstash Redis database connected to the Vercel
// project through the Vercel Marketplace (Storage tab). Connecting it adds the
// URL and token below as environment variables. Until it's connected, this
// returns 503 and the footer simply doesn't show a count.
//
// The token never leaves the server: browsers only ever see { visits: n }.
// ─────────────────────────────────────────────────────────────────────────────

const KEY = 'site:visits'

function json(body, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
}

// Upstash's REST API runs a Redis command from the URL path, e.g. /incr/site:visits.
// INCR is atomic, so two visits arriving at the same moment are both counted.
async function runCommand(command) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    return json({ error: 'Visit counter is not configured' }, 503)
  }

  try {
    const res = await fetch(`${url}/${command}/${KEY}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) throw new Error(`Upstash responded with ${res.status}`)
    const { result } = await res.json()
    // GET on a key that doesn't exist yet returns null, which means 0 visits.
    return json({ visits: Number(result) || 0 })
  } catch (error) {
    console.error('[visits]', error)
    return json({ error: 'Could not reach the visit counter' }, 502)
  }
}

export function GET() {
  return runCommand('get')
}

export function POST() {
  return runCommand('incr')
}
