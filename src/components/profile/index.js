import React, {useEffect, useState} from "react";
import Navigation from "../../Home/Navigation/index.js"
import './index.css';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {
    DeleteUserThunk,
    FindFollowersThunk,
    GetAllUserThunk,
    LogOutThunk
} from "../../Services/Users-Thunks.js";
import {FindAllEventsByUserThunk} from "../../Services/Concert-thunks.js";
import ListOfEvents from "./ListOfEvents.js";
import ListOfFollowers from "./Following.js";
import {Container} from "react-bootstrap";
import {all} from "axios";
import {logoutUser} from "../../Reducers/UserLogin-Reducer";

const ProfileComponent = () => {

    const [editprofile, seteditprofile] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {allfollowers, allfollowersloading} = useSelector(state => state.UserLogin);

    const {EventsbyUser, loading} = useSelector(state => state.ConcertData);

    const {u} = useSelector(state => state.UserLogin);

    const findEvents = async () => {
        await dispatch(FindAllEventsByUserThunk(u._id));
    }
    const findFollowers = async () => {
        await dispatch(FindFollowersThunk(u._id));
    }

    useEffect(() => {
        findEvents();
    }, [])

    useEffect(() => {
        findFollowers();
    }, [u._id])

    const CallEditProfile = () => {
        seteditprofile(true);
    }

    const CallDeleteBtn = (id) => {
        dispatch(GetAllUserThunk());
        navigate('/moreInfo');
    }

    const routeChange = () => {
        seteditprofile(false);
        navigate('/editProfile');
    }
    const routeChangeTickets = () => {
        seteditprofile(false);
        navigate('/myTickets');
    }

    const CallDeleteUserBtn = ( id ) =>
    {
        console.log(id);
        dispatch(LogOutThunk());
        dispatch(logoutUser());
        DeleteUserThunk(id);
        navigate('/');
    }

    return (

        <div className="container border-primary">
            <Navigation/>

            <div className="row ">
                <div className="col-lg-1 d-none d-lg-block">
                </div>
                <div className=" col-md-5 col-lg-4 border rounded">
                    <div className="d-flex flex-column align-items-center text-center mt-2">
                        <img src={u.Image} alt="Admin" className="rounded-circle" width="150"/>

                        <div className="mt-3">

                            <h4>{u.FirstName} {u.LastName}</h4>

                            <p className="text-secondary mb-1">{u.Role}</p>
                            <p className="text-muted font-size-sm">{u.Location}</p>

                        </div>

                    </div>

                </div>

                <div className="col-1 ">
                </div>


                <div className="d-none d-md-block col-5 col-md-6 col-lg-5 border rounded">
                    <div className="row mt-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Full Name</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {u.FirstName}{u.LastName}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0"><b>Email</b></h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {u.Email}
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
                            {u.Location}
                        </div>
                    </div>
                    <hr/>

                    <div className="row mb-2">

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <button className="btn btn-info m-1 " target="__blank"
                                    onClick={routeChange}><b>Edit</b></button>

                            {
                                u.Role === 'Buyer' && <button  className="btn btn-info m-1 "  onClick={routeChangeTickets}>View my Tickets</button>
                            }
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-12">

                            {u.Role === "Admin" ?
                             <button className="btn btn-info" onClick={() => {
                                 CallDeleteBtn(u._id)
                             }}> View All Users
                             </button> :   <button className="btn btn-danger" onClick={() => {
                                    CallDeleteUserBtn(u._id)
                                }}> Delete Profile
                             </button>
                            }


                            {/*  <button className="btn btn-danger profile-button float-end"
                                    type="button" onClick={() => {
                                CallDeleteBtn(u._id)*/}

                        </div>


                    </div>


                </div>

                <div className="col-lg-1 d-none d-lg-block">
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-lg-1  d-none d-lg-block">
                </div>

                <div className="col-md-5 col-lg-4 ">

                    {u.Role === 'Admin' ? "" : <span className="wd-followingtitle">Following Users</span>}
                        {u.Role === 'Admin' ? " " :
                                                    <>
                                                                    {allfollowers.length > 0 ?
                                                                     <>
                                                                         {
                                                                             allfollowersloading && <li className="list-group-item">
                                                                                                     Loading...
                                                                                                 </li>
                                                                         }




                                                                         <ul className="list-group list-group-flush">

                                                                             {
                                                                                 allfollowers.map((Follower) =>
                                                                                                      <ListOfFollowers
                                                                                                          key={Follower._id}
                                                                                                          following={Follower}
                                                                                                      />
                                                                                 )

                                                                             }

                                                                         </ul>

                                                                     </>
                                                                                             :
                                                                     <>
                                                                         <ul className="wd-nofoolowing list-group list-group-flush">

                                                                             <li className="list-group-item">OOP's You have are following Anyone!</li>
                                                                         </ul>

                                                                     </>
                                                                    }

                                                    </>
                            }

                </div>


                <div className="col-1 ">
                </div>

                <div className = "d-none d-md-block col-5 col-md-6 col-lg-5 ">
                    {/*<span className="wd-followingtitle">Following Users</span>*/}

                </div>



            </div>



        </div>

    );
}

export default ProfileComponent;