import {createSlice} from "@reduxjs/toolkit";

import {
    DeleteUserAdminThunk, FindFollowers, FindFollowersThunk,
    GetAllUserThunk,
    LogInThunk,
    LogOutThunk,
    UpdateLogInThunk
} from "../Services/Users-Thunks.js";

const InitialState =
    {
        login : JSON.parse(localStorage.getItem('u')) ? true:false,
        u : JSON.parse(localStorage.getItem('u')) || {},
        allusers : [],
        loading : true,
        allfollowers : [ ],
        allfollowersloading : true
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
                        localStorage.setItem('u', JSON.stringify(payload));
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
                    state.u =null;
                    state.login = false;
                    state.loading = false;
                },
            [GetAllUserThunk.fulfilled]:
                (state,{payload}) =>
                {
                    console.log("Inside ALL user reducer", payload);
                    state.allusers = payload;
                    console.log("All users" , state.allusers );
                    state.loading = false;
                },
            [DeleteUserAdminThunk.fulfilled]:
                (state,{payload}) =>
                {
                    console.log("Inside delete by admin"+ payload);
                    console.log("Result" , state.allusers);
                    state.loading=false;
                },
            [FindFollowersThunk.fulfilled]:
                (state,action) =>
                {
                    // console.log("Inside Find all followers by user thunk", payload);
                    state.allfollowers = action.payload;
                    // console.log("result" , state.allfollowers );
                    state. allfollowersloading = false;

                }

        },
    reducers:{

        loadUserFromStorage: (state) => {
            state.u = JSON.parse(localStorage.getItem('u')) || {};
        },

        logoutUser: (state) => {
            console.log("Inside nestha code");
            state.u = {};
            localStorage.removeItem('u');
        }
    }
});


export const { loadUserFromStorage, logoutUser } = UserLoginSlice.actions;
export default UserLoginSlice.reducer;
