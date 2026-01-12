
export async function fetchMe() {
  const token = localStorage.getItem("access_token");
  if (!token) return null;
  const res = await fetch("http://127.0.0.1:8000/auth/me", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) return null;
  return res.json();
}
