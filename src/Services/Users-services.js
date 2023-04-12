import axios from "axios";

const Users_API = " ";

export const GetUser = async ( ) =>
{
    const response = await axios.get(Users_API);
    const Alluser = response.data;
    return Alluser;
}

export const UpdateUser = async ( user )=>
{
    const reponse = await axios.put( `${Users_API}/${user.id}`, user)
    const updatedUser = reponse.data;
    return updatedUser;
}

export const DeleteUser = async ( id ) =>
{
    const response = await axios.delete(`${Users_API}/${id}`);
    return response.status;
}

