import axios from "axios";

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const findReviews = async (eventId) => {
    const response = await axios.get(REVIEWS_API + '/event/' + eventId);
    const reviews = await response.data;
    return reviews;
}

export const createReview = async (review) => {
    console.log(review);
    const response = await axios.post(REVIEWS_API, review)
    return response.data;
}

export const updateReview = async (review) => {
    const response = await axios.put(`${REVIEWS_API}/${review._id}`, review);
    return review;
}