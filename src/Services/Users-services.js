import axios from "axios";
import {useDispatch} from "react-redux";

const api = axios.create({
    withCredentials: true
 })

const Users_API = "http://localhost:4000/api/users";

const Followers_API = "http://localhost:4000/api/followers";

export const Login = async (Username, Password) => {
    console.log(Username + Password);
    const response = await api.post(`${Users_API}/login`, {Username, Password});
    const check = response.data;
    return check;

}

export const Update = async (UpdatedUser) => {
    console.log("Updated user", UpdatedUser._id);
    const response = await api.put(`${Users_API}/${UpdatedUser._id}`, UpdatedUser);
    const newupdateduser = response.data;
    return newupdateduser;
}

export const Delete = async (userid) => {
    console.log("Inside Services with id", userid);
    const response = await api.delete(`${Users_API}/${userid}`);
    console.log("Response from server" + response.data);
    return response.data;
}

export const Create = async (newuser) => {
    console.log("Inside create user service", {newuser});
    const response = await api.post(`${Users_API}/register`, newuser);
    console.log("From service" + response.data);
    return response.data;

}

export const Logout = async () => {
    console.log("Inside Log out service");
    const response = await api.post(`${Users_API}/logout`);
    console.log("From service" + response.data);
    return response.data;
}

export const GetAllUser = async () => {
    console.log("Inside GetallUser service");
    const response = await api.get(Users_API);
    console.log("From service" + response.data);
    return response.data
}

export const DeleteUserByAdmin = async (id) => {
    console.log("Insdie service" + id);
    const response = await api.delete(`${Users_API}/${id}`);
    console.log("From server" + response.data);
    return response.data;

}

export const FindAllFollowers = async (id) =>
{
    console.log("Inside service", id);
    const response = await api.get(`${Followers_API}/following/${id}`);
    console.log("From server" + response.data);
    return response.data;
}

export const FindUserinfobyusername = async (username) =>
{
    //     app.get('/api/users/find/:username', findUserByUsername);
    console.log("Inside find user info by username");
    const response = await api.get(`${Users_API}/find/${username}`);
    console.log("Response from server" + response.data);
    console.log({response});
    return response.data;
}

export const FollowUser = async (followingUserinfo) =>
{
  console.log("Inside service to create following");
  const response = await api.post(Followers_API, followingUserinfo);
  console.log(response.data);
}


export const GetProfileInfo = async ( ) =>
{
    console.log("Inside get profileService");
    const response = await api.get(`${Users_API}/profile`);
    const userinfo  = response.data;
    console.log("From service getting profile info " , userinfo);
    return userinfo;
}

