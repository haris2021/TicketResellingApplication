import {useNavigate} from "react-router";
import axios from "axios";
import {GetProfileInfoById} from "../../Services/Users-services";
import {useState} from "react";

const ListOfFollowers = ({following} ) =>
{
    const navigate= useNavigate();

    const [username, setusername] = useState(' ');

    const findid = async ()=>
    {
        const followinguserinfo = await GetProfileInfoById(following.followingUserId);
        console.log("Inside list of followers" , followinguserinfo.Username);
        setusername(followinguserinfo.Username);
    }

    if(username === ' ')
        findid();

    const Getinfo = ( ) =>
    {
        /*
                navigate('/check');
        */
        /* navigate(`/check?followingUsername=${post.followingUsername}
         &followingFirstname=${post.followingFirstName}&followingImage=${post.followingImage}
         &followingAddress=${post.followingAddress}`);*/
    /*


         navigate({
                         pathname: "/check",
                         search: `?followingUsername=${ followingInfo.followingUsername}&followingFirstName=${ followingInfo.followingFirstName}
                         &followingImage=${followingInfo.followingImage}&followingAddress=${followingInfo.followingAddress}`,
                     });*/
        console.log("hello");
        navigate(`../otherUserInfo/${username}`);
    }

    return(
        <div className="list-group-item" >

            <span  className="wd-removeunderline "  onClick={Getinfo} >{username}</span>

        </div>
    )
}
export default ListOfFollowers;

