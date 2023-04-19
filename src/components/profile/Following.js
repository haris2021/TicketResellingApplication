/*
import {useNavigate} from "react-router";

const ListOfFollowers = ({post} ) =>
{
    const navigate= useNavigate();

    const Getinfo = ( followingInfo ) =>
    {
        console.log("Inside following", followingInfo.followingUsername);
        navigate("/check", { state: { followingInfo : followingInfo } });

    }

    return(
        <div className="list-group-item" >

            <span  className="wd-removeunderline"  onClick={()=>{Getinfo(post)}} >{post.followingUsername}</span>

        </div>
    )
}
export default ListOfFollowers;
*/

import {useNavigate} from "react-router";

const ListOfFollowers = ({post} ) =>
{
    const navigate= useNavigate();

    const Getinfo = ( followingInfo ) =>
    {
        /*
                navigate('/check');
        */
        /* navigate(`/check?followingUsername=${post.followingUsername}
         &followingFirstname=${post.followingFirstName}&followingImage=${post.followingImage}
         &followingAddress=${post.followingAddress}`);*/
        console.log("Inside following", followingInfo.followingUsername);


         navigate({
                         pathname: "/check",
                         search: `?followingUsername=${ followingInfo.followingUsername}&followingFirstName=${ followingInfo.followingFirstName}
                         &followingImage=${followingInfo.followingImage}&followingAddress=${followingInfo.followingAddress}`,
                     });


    }

    return(
        <div className="list-group-item" >

            <span  className="wd-removeunderline"  onClick={()=>{Getinfo(post)}} >{post.followingUsername}</span>

        </div>
    )
}
export default ListOfFollowers;

