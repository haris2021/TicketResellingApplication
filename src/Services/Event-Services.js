import axios from "axios";

const EVENTS_API = "http://localhost:4000/api/events";


export const createEvent = async (data) => {
    console.log(data)
    console.log("in the event services")
    const response = await axios.post(EVENTS_API,data);
    console.log("beofre")
    return response.data;
}
