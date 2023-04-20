import axios from "axios";

const DETAILS_API = 'http://localhost:4000/api/events/';

export const findDetails = async (id) => {
    const response = await axios.get(DETAILS_API);
    const details = await response.data;
    return details;
}
