import {createSlice} from "@reduxjs/toolkit";

import {
    FindallConcertThunk,
    FindAllEventsByUserThunk,
    FindallMoviesThunk,
    FindallOtherThunk
} from "../Services/Concert-thunks.js";

const InitialState =
    {
        Concerts: [],
        EventsbyUser : [],
        loadingConcerts: false,
        loadingforEvents : false,
        movies:[],
        loadingMovies: false,
        other:[],
        loadingOther:false
    };

const ConcertSlice = createSlice({
                                     name: 'Concert',
                                     initialState: InitialState,
                                     extraReducers:
                                         {
                                             [FindallConcertThunk.pending]:
                                                 (state) => {
                                                     state.loadingConcerts = true
                                                     state.Concerts = []
                                                 },
                                             [FindallConcertThunk.fulfilled]:
                                                 (state, {payload}) => {
                                                     state.loadingConcerts = false
                                                     state.Concerts = payload
                                                 },
                                             [FindallConcertThunk.rejected]:
                                                 (state, action) => {
                                                     state.loadingConcerts = false
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
                                                 },
                                             [FindAllEventsByUserThunk.rejected]:
                                                 (state,action) =>{
                                                     state.loadingforEvents = true;
                                                     state.EventsbyUser  =  action.error
                                                 },
                                             [FindallMoviesThunk.fulfilled]:
                                                 (state, {payload}) =>
                                                 {
                                                     state.movies = payload;
                                                     state.loadingMovies = false;
                                                 },
                                             [FindallOtherThunk.fulfilled]:
                                                 (state, {payload}) =>
                                                 {
                                                     state.other = payload;
                                                     state.loadingOther =false;
                                                 },
                                         }


                                 });

export default ConcertSlice.reducer;

