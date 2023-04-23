import axios from "axios";

// const loggedInTickets_API = "http://localhost:4000/api/tickets/user";
const API_BASE = process.env.REACT_APP_API_BASE
const loggedInTickets_API = `${API_BASE}/tickets/user`;

export const loggedInUserTickets = async (userId) => {
  const response = await axios.get(`${loggedInTickets_API}/${userId}`);
  const tickets = response.data;
  return tickets;
}