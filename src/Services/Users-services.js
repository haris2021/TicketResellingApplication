import axios from "axios";

const Users_API = "http://localhost:4000/api/users";

const Followers_API = "http://localhost:4000/api/followers";

export const Login = async (Username, Password) => {
    const response = await axios.post(`${Users_API}/login`, {Username, Password});
    const check = response.data;
    return check;

}

export const Update = async (UpdatedUser) => {
    const response = await axios.put(`${Users_API}/${UpdatedUser._id}`, UpdatedUser);
    const newupdateduser = response.data;
    return newupdateduser;
}

export const Delete = async (userid) => {
    const response = await axios.delete(`${Users_API}/${userid}`);
    return response.data;
}

export const Create = async (newuser) => {
    const response = await axios.post(`${Users_API}/register`, newuser);
    return response.data;

}

export const Logout = async () => {
    const response = await axios.post(`${Users_API}/logout`);
    return response.data;
}

export const GetAllUser = async () => {
    const response = await axios.get(Users_API);
    return response.data
}

export const DeleteUserByAdmin = async (id) => {
    const response = await axios.delete(`${Users_API}/${id}`);
    return response.data;

}

export const FindAllFollowers = async (id) =>
{
    const response = await axios.get(`${Followers_API}/following/${id}`);
    return response.data;
}

export const FindUserinfobyusername = async (username) =>
{
    const response = await axios.get(`${Users_API}/${username}`);
    return response.data;
}

export const FollowUser = async (followingUserinfo) =>
{
  const response = await axios.post(Followers_API, followingUserinfo);
}

