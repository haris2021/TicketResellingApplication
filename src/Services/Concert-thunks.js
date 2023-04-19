import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./Concert-service";
import axios from "axios";

export const FindallConcertThunk = createAsyncThunk('Concert/FindAll', async () => {
    const data =  await service.FindConcerts();
    console.log("Data from thunks " , data)
    return data;
});

export const FindAllEventsByUserThunk = createAsyncThunk('Concert/FindEvents', async (id) => {

    console.log("Inside Find all events by user");
    const response = await service.FindAllEventsByUser(id);
    return response;

})