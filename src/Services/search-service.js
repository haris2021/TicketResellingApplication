import axios from "axios";

const search_API = "http://localhost:4000/api/search";


export const searchConcerts = async (searchTerm) => {
  const response = await axios.get(`${search_API}?Ename=${searchTerm}`);
  const concert_data = response.data;
  return concert_data;
}