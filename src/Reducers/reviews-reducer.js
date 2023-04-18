import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsThunk, updateReviewThunk} from "../Services/reviews-thunk";
import {createReview} from "../Services/reviews-services";

const initialState = {
    review : [],
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
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 state.review.push(payload)
                                             },
                                         [updateReviewThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 const reviewNdx = state.review
                                                     .findIndex((t) => t._id === payload._id)
                                                 state.review[reviewNdx] = {
                                                     ...state.review[reviewNdx],
                                                     ...payload
                                                 }
                                             }
                                     },
                                     // reducers: {
                                     //     createTuit(state, action) {
                                     //         state.unshift({
                                     //                           ...action.payload,
                                     //                           ...templateReview,
                                     //                       })
                                     //     },
                                     // }
                                     //     todoLikeToggle(state, action) {
                                     //         const tuitStat = state.find((tuitStat) =>
                                     //                                         tuitStat._id
                                     //                                         ===
                                     // action.payload._id)  if (tuitStat.liked === false) {
                                     // tuitStat.likes++; tuitStat.liked = true; } else {
                                     // tuitStat.likes--; tuitStat.liked = false; } } }
                                 });

export const {createTuit} = reviewsSlice.actions;
export default reviewsSlice.reducer;

