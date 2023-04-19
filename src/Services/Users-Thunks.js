import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./Users-services.js"

export const LogInThunk = createAsyncThunk('/profile/login', async ({Username, Password}) => {
    console.log("Inside Login thunks");
    const userinfo = await service.Login(Username, Password)
    console.log(userinfo.Username);
    console.log(userinfo.Password);
    console.log("Returned from service", userinfo);
    return userinfo;
});

export const UpdateLogInThunk = createAsyncThunk('/profile/editProfile', async (UpdatedUser) => {

    console.log("Inside Updated profile");
    const userInfo = await service.Update(UpdatedUser);
    console.log("From service", userInfo);
    return userInfo;
});

export const DeleteUserThunk = createAsyncThunk('/profile/deleteuser', async (userid) => {

    console.log("Delete user of id", userid);
    const Response = await service.Delete(userid);
    console.log(Response);
});

export const CreateUserThunk = createAsyncThunk('profile/createProfile', async (newuser) => {
    console.log("Inside Create USER Thunk", newuser);
    const reponse = await service.Create(newuser);
    console.log(reponse);
});

export const LogOutThunk = createAsyncThunk('/profile/logout', async () => {

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

export const DeleteUserAdminThunk = createAsyncThunk('/admin/deleteuser', async (id) => {

    console.log("Into DeleteUseAdminThunk");
    const response = await service.DeleteUserByAdmin(id);
    console.log("Delted from service", response);
    return response;

});

export const FindFollowersThunk = createAsyncThunk ('/Profile/listofallfollowing', async (id) =>{

    console.log("Inside Find Followers Thunk");
    const response  = await service.FindAllFollowers(id);
    console.log("From service", response);
    return response;
});

