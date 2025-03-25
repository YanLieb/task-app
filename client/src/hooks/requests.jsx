const API_URL = "http://localhost:2609/v1";

export default async function httpGetTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    return await response.json();
  } catch (err) {
    console.error(err.message);
  }
}
