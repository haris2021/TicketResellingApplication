import axios from "axios";

// const search_API = "http://localhost:4000/api/search";

const API_BASE = process.env.REACT_APP_API_BASE
const search_API = `${API_BASE}/search`;

export const searchConcerts = async (searchTerm) => {
  const response = await axios.get(`${search_API}?Ename=${searchTerm}`);
  const concert_data = response.data;
  return concert_data;
}