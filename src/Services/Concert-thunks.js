import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./Concert-service";

//
// export const FindallConcertThunk = createAsyncThunk ('/',
//                                                      async () =>{
//                                                        const events=  await service.FindConcerts()
//                                                          console.log(events)
//                                                          return events;
//                                                      } );
export const FindallConcertThunk = createAsyncThunk ('/', async () => await service.FindConcerts());


