import React from "react";
import {useSelector} from "react-redux";
import DetailInformation from "./details";

const Profile = () => {
    const details = useSelector(
        (state) => state.details);
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
                <DetailInformation details={details[0]}/>
        </div>
    );

};

export default Profile;