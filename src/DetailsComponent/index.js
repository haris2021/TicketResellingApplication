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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <div style={{marginLeft:80}}>
                <Navigation/>

            </div>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    <DetailInformation key={details._id} details={details}/>
                }
            </ul>

        </div>

    );

};

export default DetailsComponent;