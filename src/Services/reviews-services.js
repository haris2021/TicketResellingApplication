import axios from "axios";

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const findReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = await response.data;
    return reviews;
}

export const createReview = async (review) => {
    console.log(JSON.stringify(review) + "in service")
    const response = await axios.post(REVIEWS_API, review)
    return response.data;
}