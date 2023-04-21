import {createSlice} from "@reduxjs/toolkit";

import {
    DeleteUserAdminThunk,
    FindFollowersThunk,
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
                        state.loading = false;
                        state.u = payload;
                        state.login = true;
                        localStorage.setItem('u', JSON.stringify(payload));
                    },
            [UpdateLogInThunk.fulfilled]:
                (state,{payload}) =>
                {
                      state.u = payload;
                },
            [LogOutThunk.fulfilled]:
                (state,{payload}) =>
                {
                    state.u =null;
                    state.login = false;
                    state.loading = false;
                },
            [GetAllUserThunk.fulfilled]:
                (state,{payload}) =>
                {
                    state.allusers = payload;
                    state.loading = false;
                },
            [DeleteUserAdminThunk.fulfilled]:
                (state,{payload}) =>
                {
                    state.loading=false;
                },
            [FindFollowersThunk.fulfilled]:
                (state,action) =>
                {
                    state.allfollowers = action.payload;
                    state. allfollowersloading = false;

                }

        },
    reducers:{

        loadUserFromStorage: (state) => {
            state.u = JSON.parse(localStorage.getItem('u')) || {};
        },

        logoutUser: (state) => {
            state.u = {};
            localStorage.removeItem('u');
        }
    }
});


export const { loadUserFromStorage, logoutUser } = UserLoginSlice.actions;
export default UserLoginSlice.reducer;
