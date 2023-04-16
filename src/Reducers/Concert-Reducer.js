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
                                                     state.concerts = []
                                                 },
                                             [FindallConcertThunk.fulfilled]:
                                                 (state, {payload}) => {
                                                     state.loading = false
                                                     state.concerts = payload
                                                 },
                                             [FindallConcertThunk.rejected]:
                                                 (state, action) => {
                                                     state.loading = false
                                                     state.concerts = action.error
                                                 },
                                         }

                                 });

export default ConcertSlice.reducer;


