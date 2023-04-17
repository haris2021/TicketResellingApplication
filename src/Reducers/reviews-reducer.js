import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsThunk} from "../Services/reviews-thunk";
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

