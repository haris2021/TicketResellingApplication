import axios from "axios";

const DETAILS_API = 'http://localhost:4000/api/events/';
const TICKET_API = 'http://localhost:4000/api/tickets/';


export const findDetails = async (id) => {
    const response = await axios.get(DETAILS_API + id);
    const details = await response.data;
    return details;
}


export const createTicket = async (ticket) => {
    const response = await axios.post(TICKET_API, ticket)
    console.log(response)
    return response.data;
}