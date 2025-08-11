export async function fetchFromPayload(path: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
  if (!base) throw new Error('Missing NEXT_PUBLIC_PAYLOAD_URL');

  const res = await fetch(`${base}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Fetch failed ${res.status} ${res.statusText} for ${path}`);
  }
  return res.json();
}
