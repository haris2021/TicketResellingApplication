import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./details-services"

export const findDetailsThunk = createAsyncThunk(
    '/details', async () => await service.findDetails()
)

export const createDetailsThunk = createAsyncThunk(
    '/details', async (review) => {
        return await service.createReview(review)
    })

