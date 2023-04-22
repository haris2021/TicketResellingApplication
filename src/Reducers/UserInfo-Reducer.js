/*
import {createSlice} from "@reduxjs/toolkit";

import {GetProfileInfoThunk} from "../Services/Users-Thunks.js"

const InitialState  =
    {
        user :[],
        loading:true
    }


const UserInfoSlice = createSlice({

    name:'UserInfoSlice',
    initialState:InitialState,
    extraReducers:{

                [GetProfileInfoThunk.fulfilled]:
                    (state, {payload})=>
                    {
                        state.user.push({payload});
                        state.loading = false;
                    }
    }

 });



export default UserInfoSlice.reducer;
*/
