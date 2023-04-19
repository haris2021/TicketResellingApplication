import {createSlice} from "@reduxjs/toolkit";

import {FindallConcertThunk} from "../Services/Concert-thunks";

const InitialState =
    {
        Concerts: [],
        loading: false
    };

const ConcertSlice = createSlice({
                                     name: 'Concert',
                                     initialState: InitialState,
                                     extraReducers:
                                         {
                                             [FindallConcertThunk.pending]:
                                                 (state) => {
                                                     state.loading = true
                                                     state.Concerts = []
                                                 },
                                             [FindallConcertThunk.fulfilled]:
                                                 (state, {payload}) => {
                                                 console.log("inside the reducer", payload)
                                                     state.loading = false
                                                     state.Concerts = payload
                                                 },
                                             [FindallConcertThunk.rejected]:
                                                 (state, action) => {
                                                     state.loading = false
                                                     state.Concerts = action.error
                                                 },
                                         }

                                 });

export default ConcertSlice.reducer;

