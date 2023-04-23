import axios from "axios";

 const Concerts_API = 'http://localhost:4000/api/events';

/*const API_BASE = process.env.REACT_APP_API_BASE
const Concerts_API = `${API_BASE}/events`;*/

export const FindConcerts = async () => {
    const response = await axios.get(Concerts_API);
    const concert_data = response.data;
    return concert_data;
}

export const FindAllEventsByUser = async ( id ) =>
{
    const response = await axios.get(`${Concerts_API}/eventinfo/${id}`);
    return response.data;
}

export const createEvent = async (data) => {
    const response = await axios.post(Concerts_API,data);
    return response.data;
}
