import axios from "axios";

const api = axios.create({
    withCredentials: true
 })

const Users_API = "http://localhost:4000/api/users";

const Followers_API = "http://localhost:4000/api/followers";
;

export const Login = async (Username, Password) => {

    const response = await api.post(`${Users_API}/user/login`, {Username, Password});

/*
    const response = await axios.post(`${Users_API}/login`, {Username, Password});
*/
    const check = response.data;
    return check;

}

export const Update = async (UpdatedUser) => {

    const response = await api.put(`${Users_API}/${UpdatedUser._id}`, UpdatedUser);
/*
    const response = await axios.put(`${Users_API}/${UpdatedUser._id}`, UpdatedUser);
*/
    const newupdateduser = response.data;
    return newupdateduser;
}

export const Delete = async (userid) => {

    const response = await api.delete(`${Users_API}/${userid}`);
    console.log("Response from server" + response.data);
/*
    const response = await axios.delete(`${Users_API}/${userid}`);
*/
    return response.data;
}

export const Create = async (newuser) => {

    const response = await api.post(`${Users_API}/register`, newuser);
    console.log("From service" + response.data);
/*
    const response = await axios.post(`${Users_API}/register`, newuser);
*/
    return response.data;

}

export const Logout = async () => {

    console.log("Inside logout service");
    console.log(`${Users_API}/logout`);
    const response = await api.post(`${Users_API}/logout`);
    console.log("From service" + response.data);
/*
    const response = await axios.post(`${Users_API}/logout`);
*/
    return response.data;
}

export const GetAllUser = async () => {

    const response = await api.get(Users_API);
/*
    const response = await axios.get(Users_API);
*/
    return response.data
}

export const DeleteUserByAdmin = async (id) => {
    console.log("Insdie service" + id);
    const response = await api.delete(`${Users_API}/${id}`);
    console.log("From server" + response.data);
    /*const response = await axios.delete(`${Users_API}/${id}`);*/
    return response.data;

}

export const FindAllFollowers = async (id) =>
{
    console.log("Inside service to find all he is following", id);
    const response = await api.get(`${Followers_API}/following/${id}`);
    console.log("From server inside service to find following" + JSON.stringify(response.data));
/*
    const response = await axios.get(`${Followers_API}/following/${id}`);
*/
    return response.data;
}

export const FindUserinfobyusername = async (username) =>
{
    console.log("From following, calling server", username);
    const response = await api.get(`${Users_API}/find/${username}`);
    console.log("Response from server" + response.data);
    console.log({response});
/*
    const response = await axios.get(`${Users_API}/${username}`);
*/
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

export const GetProfileInfoById = async ( id) =>
{
    const response = await api.get(`${Users_API}/${id}`);
    const userinfo  = response.data;
    console.log("From service getting profile info " + userinfo.Username);
    return userinfo;
}

/*
  const response = await axios.post(Followers_API, followingUserinfo);
*/


