import {createSlice} from "@reduxjs/toolkit";

import {LogInThunk, LogOutThunk, UpdateLogInThunk} from "../Services/Users-Thunks.js";

const InitialState  =
    {
        login : false,
        u : [],
        loading : true
    }

const UserLoginSlice  = createSlice({
    name:'ULogin',
    initialState:InitialState,
    extraReducers :
        {
                [LogInThunk.fulfilled]:
                    (state,{payload}) =>
                    {
                        console.log("Inside reducer", {payload});
                        state.loading = false;
                        state.u = payload;
                        console.log("Displaying u", state.u);
                        console.log("Username", state.u.FirstName);
                        state.login = true;
                        console.log("from Reducer" , state.login);

                    },
            [UpdateLogInThunk.fulfilled]:
                (state,{payload}) =>
                {
                      console.log("Inside Update thunk reducer");
                      state.u = payload;
                },
            [LogOutThunk.fulfilled]:
                (state,{payload}) =>
                {
                    console.log("Inside Logout REDUCER", payload);
                    state.u =[];
                    state.login = false;
                    state.loading = false;
                }

        }
                                      });


export default UserLoginSlice.reducer;
