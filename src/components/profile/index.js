import React, {useEffect} from "react";
import Navigation from "../../Home/Navigation/index.js"
import './index.css';

import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";
import {FindFollowersThunk, GetAllUserThunk} from "../../Services/Users-Thunks.js";
import {FindAllEventsByUserThunk} from "../../Services/Concert-thunks.js";
import ListOfEvents from "./ListOfEvents.js";
import ListOfFollowers from "./Following.js";


const ProfileComponent = () => {

    const [editprofile, seteditprofile] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {allfollowers, allfollowersloading } = useSelector(state => state.UserLogin);


    const {EventsbyUser,loading} = useSelector(state => state.ConcertData);

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
        console.log("Edit clicked");
        seteditprofile(true);
     }

    const CallDeleteBtn = (id) => {
        /* console.log("Dlete button clicked");
         dispatch(DeleteUserThunk(id));
         navigate('/');*/
        dispatch(GetAllUserThunk());
        navigate('/moreInfo');

    }

    const routeChange = () => {
        seteditprofile(false);
        navigate('/editProfile');
    }

    return (

        <div className="container border-primary">
            <Navigation/>

            <div className="row ">
                <div className = "col-lg-1 d-none d-lg-block">
                </div>
                <div className = " col-md-5 col-lg-4 border rounded">
                    <div className="d-flex flex-column align-items-center text-center mt-2">
                        <img src={u.Image} alt="Admin" className="rounded-circle" width="150"/>

                        <div className="mt-3">

                            <h4>{u.FirstName} {u.LastName}</h4>

                            <p className="text-secondary mb-1">Full Stack Developer</p>
                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>

                        </div>

                    </div>

                </div>

                <div className = "col-1 ">
                </div>



                <div className = "d-none d-md-block col-5 col-md-6 col-lg-5 border rounded">
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
                            <button className="btn btn-info "  target="__blank"
                                    onClick={routeChange}><b>Edit</b></button>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-12">

                            {u.Role === "Admin" ?
                             <button className="btn btn-info"  onClick={() => {
                                 CallDeleteBtn(u._id)
                             }}> View All Users
                             </button>: null
                            }

                          {/*  <button className="btn btn-danger profile-button float-end"
                                    type="button" onClick={() => {
                                CallDeleteBtn(u._id)*/}

                        </div>

                    </div>

                </div>

                <div className = "col-lg-1 d-none d-lg-block">
                </div>
            </div>
            <div className="row mt-2">
                <div className = "col-lg-1  d-none d-lg-block">
                </div>


                {u.Role === 'Admin'? " " :

                            <div className = "col-md-5 col-lg-4 border rounded">
                                <ul className="list-group list-group-flush">

                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <span className="h6 text-primary">
                                                           <b> Following</b>
                                                        </span>

                                    </li>

                                    {allfollowers.length > 0 ?
                                     <>
                                         {
                                             allfollowersloading && <li className="list-group-item">
                                                                     Loading...
                                                                 </li>
                                         }


                                         {

                                             allfollowers.map((Follower) =>
                                                                  <ListOfFollowers
                                                                      key={Follower._id}
                                                                      post={Follower}
                                                                  />
                                             )

                                         }
                                     </> :
                                     <>
                                         <span style= { {display: 'block', textAlign: 'center',color: 'grey'}} >No Following Information</span>
                                     </>

                                    }





                                </ul>
                             </div>
                }


                <div className = "col-1 ">
                </div>

                {u.Role === 'Admin' ? " " : u.Role === 'Seller' ?

                                            <>
                                                <div className="d-none d-md-block col-5 col-md-6 col-lg-5 border rounded">

                                                    <ul className="list-group list-group-flush">

                                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">

                                                                <span className="h6 text-primary">
                                                                    <b>Listing</b>
                                                                </span>
                                                        </li>


                                                        {
                                                            loading && <li className="list-group-item">
                                                                        Loading...
                                                                    </li>
                                                        }

                                                        {

                                                            EventsbyUser.map((Event) =>
                                                                                 <ListOfEvents
                                                                                     key={Event._id}
                                                                                     post={Event}
                                                                                 />
                                                            )

                                                        }

                                                    </ul>
                                                </div>
                                            </>:
                                            <>
                                                List of Tickets
                                            </>


                }

                <div className = "col-lg-1 d-none d-lg-block">
                </div>


            </div>


        </div>

    );
}

export default ProfileComponent;