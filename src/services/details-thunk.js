import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./details-services"

export const findDetailsThunk = createAsyncThunk(
    '/details', async () => await service.findDetails()
)

export const createTuitThunk = createAsyncThunk(
    '/details', async (review) => {
        const newReview = await service.createReview(review)
        return newReview
    })

