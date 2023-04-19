import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsThunk, updateReviewThunk} from "../Services/reviews-thunk";

const initialState = {
    review: [],
    reviewsLoading: false
}

const reviewsSlice = createSlice({
                                     name: 'reviews',
                                     initialState,
                                     extraReducers: {
                                         [findReviewsThunk.pending]:
                                             (state) => {
                                                 state.reviewsLoading = true
                                                 state.review = []
                                             },
                                         [findReviewsThunk.fulfilled]:
                                             (state, {payload}) => {
                                                 state.reviewsLoading = false
                                                 state.review = payload
                                             },
                                         [findReviewsThunk.rejected]:
                                             (state, action) => {
                                                 state.reviewsLoading = false
                                                 state.review = action.error
                                             },
                                         [createReviewThunk.fulfilled]:
                                             (state, {payload}) => {
                                                 state.loading = false
                                                 state.review.push(payload)
                                             },
                                         [updateReviewThunk.fulfilled]:
                                             (state, {payload}) => {
                                                 state.loading = false
                                                 const reviewNdx = state.review
                                                     .findIndex((t) => t._id === payload._id)
                                                 state.review[reviewNdx] = {
                                                     ...state.review[reviewNdx],
                                                     ...payload
                                                 }
                                             }
                                     },
                                 });

export default reviewsSlice.reducer;

