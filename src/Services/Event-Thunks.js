import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./Event-Services"

export const createEventThunk = createAsyncThunk(
    '/createEvent', async (data) =>{
        console.log("in the event thunks")
        console.log(data)
      const datafromserver =  await service.createEvent(data);
        console.log(datafromserver)
        return datafromserver;

})
