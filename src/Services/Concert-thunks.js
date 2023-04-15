import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./Concert-service";

export const FindallConcertThunk = createAsyncThunk ('/', async () => await service.FindConcerts());

