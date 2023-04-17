import {createSlice} from "@reduxjs/toolkit";
import {findDetailsThunk} from "../Services/details-thunk";

const initialState = {
    details: [],
    loading: false
}

const detailsSlice = createSlice({
                                     name: "details",
                                     initialState,
                                     extraReducers: {
                                         [findDetailsThunk.pending]:
                                             (state) => {
                                                 state.loading = true
                                                 state.details = []
                                             },
                                         [findDetailsThunk.fulfilled]:
                                             (state, {payload}) => {
                                                 state.loading = false
                                                 state.details = payload
                                             },
                                         [findDetailsThunk.rejected]:
                                             (state, action) => {
                                                 state.loading = false
                                                 state.error = action.error
                                             }
                                     }
                                 });

export default detailsSlice.reducer;

