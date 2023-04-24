/*

const FollowingUserInfo = ({followingInfo }) => {

    return (
        <div>
            <h1>Following User Info</h1>
            <p>{followingInfo .followingUsername}</p>
            <p>{followingInfo .followingFirstName}</p>
        </div>
    );
};

export default FollowingUserInfo;*/

/*import { useLocation, useParams } from 'react-router-dom';
import React from "react";
import Navigation from "../../Home/Navigation/index.js";


const FollowingUserInfo = () => {

        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);


    return (
        <div>

            <Navigation/>

            <div className="row wd-followingprofile ">


                <div className = "col-lg-1 d-none d-lg-block">
                </div>
                <div className = " col-md-5 col-lg-4 border rounded">
                    <div className="d-flex flex-column align-items-center text-center mt-2">
                        <img src={searchParams.get('followingImage')} alt="Admin" className="rounded-circle" width="150"/>

                        <div className="mt-3">
                            <h4>{searchParams.get('followingUsername')} </h4>
                            <p className="text-secondary mb-1">{searchParams.get('followingAddress')}</p>
                            <button  disabled className="btn btn-primary me-2 mb-3">Following</button>
                            <button className="btn btn-outline-primary mb-3">Message</button>
                        </div>

                    </div>

                </div>

                <div className = "col-1 ">
                </div>


                <div className = "d-none d-md-block col-5 col-md-6 col-lg-5 border rounded">
                    <div className="row mt-5">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Full Name</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            name
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Email</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            email
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Phone</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            (239) 816-9029
                        </div>
                    </div>
                    <hr/>

                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Address</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            location
                        </div>
                    </div>
                    <hr/>
                </div>

                <div className = "col-lg-1 d-none d-lg-block">
                </div>

            </div>

        </div>


    );
};

export default FollowingUserInfo;*/

import {useParams} from "react-router";
import {
    FindAllFollowers,
    FindUserinfobyusername,
    FollowUser
} from "../../Services/Users-services.js"
import Navigation from "../../Home/Navigation/index.js";
import React, {useState} from "react";
import {useSelector} from "react-redux";

const FollowingUserInfo = () => {

    const username = useParams();
    console.log(username.username);
    const Username = username.username
    console.log("Final" + Username);


    const {u} = useSelector(state => state.UserLogin);

    const [userinfo, setuserinfo] = useState('');

    const [follow, setfollow] = useState('false');

    const check = async () => {

        const response = await FindUserinfobyusername(Username);
        console.log("Talking to server", response);

        const serveruserinfo =
            {
                email: response.Email,
                firstname: response.FirstName,
                lastname: response.LastName,
                username: response.Username,
                location: response.Location,
                image: response.Image,
                id: response._id
            }

        setuserinfo(serveruserinfo);

        console.log("Printing user info" , userinfo)

        const followingresponse = await FindAllFollowers(u._id);


        const followingornot = followingresponse.some(
            user => user.followingUserId === response._id);
        setfollow(followingornot);

        console.log("Following or not" + followingornot);
        console.log("Setfollow is set to"  + follow);


    }
    if (userinfo === '') {
        check();
    }

    const followuser = () => {

        followoneuser();
        setfollow(true);
    }

    const followoneuser = async () => {
        const followfollowingobj =
            {
                followerUserId: u._id,
                followingUserId: userinfo.id,
                followingUsername: userinfo.username,
                followingFirstName: userinfo.firstname,
                followingImage: userinfo.image,
                followingAddress: userinfo.location
            }
        await FollowUser(followfollowingobj);
    }

    return (
        <div>

            <div>

                <div style={{marginLeft:110}}>
                    <Navigation/>

                </div>

                <div className="row">


                    <div className="col-lg-1 d-none d-lg-block">
                    </div>
                    <div className=" col-md-5 col-lg-4 border rounded">
                        <div className="d-flex flex-column align-items-center text-center mt-2">
                            <img src={userinfo.image} alt="Admin" className="rounded-circle"
                                 width="150"/>

                            <div className="mt-3">
                                <h4>{userinfo.username}</h4>
                                <p className="text-secondary mb-1"></p>

                                {follow ? <button disabled
                                                  className="btn btn-primary me-2 mb-3">Following</button>
                                        : <button onClick={followuser}
                                                  className="btn btn-primary me-2 mb-3">Follow</button>}
                                <button className="btn btn-outline-primary mb-3">Message</button>


                            </div>

                        </div>

                    </div>

                    <div className="col-1 ">
                    </div>


                    <div className="d-none d-md-block col-5 col-md-6 col-lg-5 border rounded">
                        <div className="row mt-5">
                            <div className="col-sm-3">
                                <h6 className="mb-0"><b>Full Name</b></h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {userinfo.firstname} {userinfo.lastname}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0"><b>Email</b></h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {userinfo.email}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0"><b>Phone</b></h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                123-456-8890
                            </div>
                        </div>
                        <hr/>

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0"><b>Address</b></h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {userinfo.location}
                            </div>
                        </div>
                        <hr/>
                    </div>

                    <div className="col-lg-1 d-none d-lg-block">
                    </div>

                </div>

            </div>


        </div>
    );

}

export default FollowingUserInfo;