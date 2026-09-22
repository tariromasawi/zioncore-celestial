export async function discover({ username = "tariromasawi" } = {}) {
  const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner`, { headers: { Accept: "application/vnd.github+json", "User-Agent": "zioncore-celestial" } });
  if (!res.ok) return { status: "UNAVAILABLE", records: [] };
  const repos = await res.json();
  return { status: "FOUND", records: repos.map(r => ({ title: r.name, url: r.html_url, status: "FOUND", source: "github" })) };
}
