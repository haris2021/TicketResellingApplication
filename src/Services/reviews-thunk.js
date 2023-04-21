import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-services"

export const findReviewsThunk = createAsyncThunk(
    '/reviews', async (eventId) => await service.findReviews(eventId)
)

export const createReviewThunk = createAsyncThunk(
    '/reviews/createReview', async (tuit) => {
        const newReview = await service.createReview(tuit)
        return newReview
    })

export const updateReviewThunk = createAsyncThunk(
    '/reviews/updateReview',
    async (review) =>
        await service.updateReview(review)
)
