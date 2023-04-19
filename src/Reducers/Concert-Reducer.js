import {createSlice} from "@reduxjs/toolkit";

import {FindallConcertThunk, FindAllEventsByUserThunk} from "../Services/Concert-thunks.js";

const InitialState =
    {
        Concerts: [],
        EventsbyUser : [],
        loading: false,
        loadingforEvents : false,
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
                                                     state.loading = false
                                                     state.Concerts = payload
                                                 },
                                             [FindallConcertThunk.rejected]:
                                                 (state, action) => {
                                                     state.loading = false
                                                     state.Concerts = action.error
                                                 },
                                             [FindAllEventsByUserThunk.pending]:
                                                 (state) =>{
                                                     state.loadingforEvents = true;
                                                     state.EventsbyUser = []
                                                 },

                                             [FindAllEventsByUserThunk.fulfilled]:
                                                 (state,action) =>{
                                                     state.loadingforEvents = false;
                                                     state.EventsbyUser=  action.payload
                                                     console.log("From reducer events" , state.EventsbyUser);
                                                 },
                                             [FindAllEventsByUserThunk.rejected]:
                                                 (state,action) =>{
                                                     state.loadingforEvents = true;
                                                     state.EventsbyUser  =  action.error
                                                 }
                                         }


                                 });

export default ConcertSlice.reducer;


