import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./Concert-service";

export const FindallConcertThunk = createAsyncThunk('Concert/FindAll', async () => {
    const data =  await service.FindConcerts();
  /*  const dummy = data;
    const allconcertdata = dummy.use( (a) => a.Ecategory === "Concerts" );
*/
    const allconcertdata = data.filter((item) => item.Ecategory === "Concerts");
    return allconcertdata;

});

export const FindallMoviesThunk = createAsyncThunk('Movies/FindAll', async () => {
    const data =  await service.FindConcerts();

    const allmoviesdata = data.filter((item) => item.Ecategory === "Movies");

    return allmoviesdata;

});

export const FindallOtherThunk = createAsyncThunk('Other/FindAll', async () => {

    const data =  await service.FindConcerts();
    const allotherdata = data.filter((item) => item.Ecategory === "Miscellaneous");

    return allotherdata;

});


export const FindAllEventsByUserThunk = createAsyncThunk('Concert/FindEvents', async (id) => {

    const response = await service.FindAllEventsByUser(id);
    return response;
})

export const createEventThunk = createAsyncThunk('/createEvent', async (data) =>{
    const datafromserver =  await service.createEvent(data);
    return datafromserver;
})



