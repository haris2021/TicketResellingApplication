import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./Concert-service";
import axios from "axios";

export const FindallConcertThunk = createAsyncThunk('Concert/FindAll', async () => {
    const data =  await service.FindConcerts();
  /*  const dummy = data;
    const allconcertdata = dummy.use( (a) => a.Ecategory === "Concerts" );
    console.log("Only concert data:" , allconcertdata);
*/
    const allconcertdata = data.filter((item) => item.Ecategory === "Concerts");
    console.log("Only concert data:" , allconcertdata);

    return allconcertdata;

});

export const FindallMoviesThunk = createAsyncThunk('Movies/FindAll', async () => {
    const data =  await service.FindConcerts();

    const allmoviesdata = data.filter((item) => item.Ecategory === "Movies");
    console.log("Only movies data:" , allmoviesdata);

    return allmoviesdata;

});

export const FindallOtherThunk = createAsyncThunk('Other/FindAll', async () => {

    const data =  await service.FindConcerts();
    const allotherdata = data.filter((item) => item.Ecategory === "Miscellaneous");
    console.log("Only other data:" , allotherdata);

    return allotherdata;

});


export const FindAllEventsByUserThunk = createAsyncThunk('Concert/FindEvents', async (id) => {

    console.log("Inside Find all events by user");
    const response = await service.FindAllEventsByUser(id);
    return response;
})

export const createEventThunk = createAsyncThunk('/createEvent', async (data) =>{
    console.log("Inside Create Event Thunk", data)
    const datafromserver =  await service.createEvent(data);
    console.log(datafromserver)
    return datafromserver;
})



