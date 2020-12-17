import axios from 'axios';

const API_URL = "http://localhost:3000"

export async function listProjects() {
  const url = `${API_URL}/projects`
  const result = await axios.get(url)
  return result.data
}