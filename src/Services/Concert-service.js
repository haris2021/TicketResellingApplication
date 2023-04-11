import axios from "axios";

const Concerts_API = 'http://localhost:3001/concert';

export const FindConcerts = async ( ) =>
{
        const response = await axios.get(Concerts_API);
        const concert_data = response.data;
        console.log(concert_data);
}

