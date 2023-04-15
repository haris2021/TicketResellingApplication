import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./Users-services.js"

export const GetUser = createAsyncThunk('/profile', async ( ) => await service.GetUser());

export const DeleteUser = createAsyncThunk('/delete', async ( userid ) => {
    await service.DeleteUser(id)
});

export const UpdateUser = createAsyncThunk ('/update' , async (user) =>{

   const Updateu =  await service.UpdateUser(user);
   return Updateu;

});