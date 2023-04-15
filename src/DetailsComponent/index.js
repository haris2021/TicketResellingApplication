import React from "react";
import {useSelector} from "react-redux";
import DetailInformation from "./details";

import Navigation from "../Home/Navigation/index.js"

const Profile = () => {
    const details = useSelector(
        (state) => state.details);
    return (

        <div>

            <Navigation/>

            <div className="d-flex flex-column align-items-center justify-content-center">
                <DetailInformation details={details[0]}/>
            </div>

        </div>

    );

};

export default Profile;