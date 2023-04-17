import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./Users-services.js"

/*
export const GetProfileInfoThunk = createAsyncThunk('/profile', async ( ) =>{

    console.log("Inside Getprofile Thunk");
    const currentUser = await service.GetProfileInfo();
    console.log("From thunks Current user" , currentUser );
    return currentUser;
});
*/

export const LogInThunk = createAsyncThunk('/login', async ({Username, Password}) => {
    console.log("Inside Login thunks");
    const userinfo = await service.Login(Username, Password)
    console.log(userinfo.Username);
    console.log(userinfo.Password);
    console.log("Returned from service", userinfo);
    return userinfo;
});

export const UpdateLogInThunk = createAsyncThunk('/editProfile', async (UpdatedUser) => {

    console.log("Inside Updated profile");
    const userInfo = await service.Update(UpdatedUser);
    console.log("From service", userInfo);
    return userInfo;
});

export const DeleteUserThunk = createAsyncThunk('/profile', async (userid) => {

    console.log("Delete user of id", userid);
    const Response = await service.Delete(userid);
    console.log(Response);
});

export const CreateUserThunk = createAsyncThunk('/createProfile', async (newuser) => {
    console.log("Inside Create USER Thunk", newuser);
    const reponse = await service.Create(newuser);
    console.log(reponse);
});

export const LogOutThunk = createAsyncThunk('/profile', async () => {

    console.log("Inside LogOut Thunk");
    const response = await service.Logout();
    console.log("From service" + response);
});

export const GetAllUserThunk = createAsyncThunk('/moreInfo', async () => {

    console.log("Inside GetAllUserThunk");
    const response = await service.GetAllUser();
    console.log("from service", response);
    return response;
});

export const DeleteUserAdminThunk = createAsyncThunk('/', async (id) => {

    console.log("Into DeleteUseAdminThunk");
    const response = await service.DeleteUserByAdmin(id);
    console.log("Delted from service", response);
    return response;

});