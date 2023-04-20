import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailInformation from "./details";
import {findDetailsThunk} from "../Services/details-thunk";

import Navigation from "../Home/Navigation/index.js"
import {useParams} from "react-router-dom";

const DetailsComponent = () => {
    const {details, loading} = useSelector(state => state.details)
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(findDetailsThunk(id))
    }, [])
    return (
        <div>
            <Navigation/>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    details.map((detail) =>
                                    <DetailInformation key={detail._id} details={detail}/>)
                }
            </ul>

        </div>

    );

};

export default DetailsComponent;