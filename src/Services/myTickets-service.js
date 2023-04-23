import axios from "axios";

const loggedInTickets_API = "http://localhost:4000/api/tickets/user";


export const loggedInUserTickets = async (userId) => {
  const response = await axios.get(`${loggedInTickets_API}/${userId}`);
  const tickets = response.data;
  return tickets;
}