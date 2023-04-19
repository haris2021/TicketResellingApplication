import axios from "axios";

const Concerts_API = 'http://localhost:4000/api/events';

export const FindConcerts = async () => {
    const response = await axios.get(Concerts_API);
    const concert_data = response.data;
    console.log(" response from the server",concert_data);
    return concert_data;
}
