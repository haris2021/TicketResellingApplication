import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-services"

export const findReviewsThunk = createAsyncThunk(
    '/reviews', async () => await service.findReviews()
)

export const createReviewThunk = createAsyncThunk(
    '/reviews/createReview', async (tuit) => {
        const newReview = await service.createReview(tuit)
        return newReview
    })
