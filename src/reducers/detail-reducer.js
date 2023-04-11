import {createSlice} from "@reduxjs/toolkit";
import details from "../Data/details.json"

const detailsSlice = createSlice({
                                     name: "details",
                                     initialState: details,
                                 });

export default detailsSlice.reducer;

