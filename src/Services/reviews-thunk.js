import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-services"

export const findReviewsThunk = createAsyncThunk(
    '/reviews', async () => await service.findReviews()
)

// export const createReviewsThunk = createAsyncThunk(
//     '/details', async (review) => {
//         return await service.createReview(review)
//     })
//
