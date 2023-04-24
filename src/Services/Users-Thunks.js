import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./Users-services.js"

export const LogInThunk = createAsyncThunk('/profile/login', async ({Username, Password}) => {
    const userinfo = await service.Login(Username, Password)
    return userinfo;
});

export const UpdateLogInThunk = createAsyncThunk('/profile/editProfile', async (UpdatedUser) => {

    const userInfo = await service.Update(UpdatedUser);
    return userInfo;
});

export const DeleteUserThunk = createAsyncThunk('/profile/deleteuser', async (userid) => {

    const Response = await service.Delete(userid);
});

export const CreateUserThunk = createAsyncThunk('profile/createProfile', async (newuser) => {
    const reponse = await service.Create(newuser);
});

export const LogOutThunk = createAsyncThunk('/profile/logout', async () => {

    console.log("logout thunk")
    const response = await service.Logout();
});

export const GetAllUserThunk = createAsyncThunk('/moreInfo', async () => {

    const response = await service.GetAllUser();
    return response;
});

export const DeleteUserAdminThunk = createAsyncThunk('/admin/deleteuser', async (id) => {

    const response = await service.DeleteUserByAdmin(id);
    return response;

});

export const FindFollowersThunk = createAsyncThunk ('/Profile/listofallfollowing', async (id) =>{

    const response  = await service.FindAllFollowers(id);
    return response;
});


