import axios from "axios";

const Concerts_API = 'http://localhost:4000/api/events';

export const FindConcerts = async () => {
    const response = await axios.get(Concerts_API);
    const concert_data = response.data;
    console.log(concert_data);
    return concert_data;
}

export const FindAllEventsByUser = async ( id ) =>
{
    console.log("Inside Find all events by user Service");
    const response = await axios.get(`${Concerts_API}/findevents/${id}`);
    console.log("Response from server" , response.data);
    return response.data;
}
