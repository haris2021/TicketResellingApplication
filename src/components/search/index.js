import "./index.css";
import React, {useEffect, useState} from "react";
import Navigation from "../../Home/Navigation/index.js";
import {useLocation, useNavigate} from "react-router";
import {searchConcerts} from '../../Services/search-service.js'

const SearchComponent = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const ename = queryParam.get("Ename");
    const [search, setSearch] = useState(queryParam.get("Ename"));
    const [results, setResults] = useState({});
    let navigate = useNavigate();
    const searchButtonHandler = () => {
        navigate('/search?Ename='+search);
    }

    function redirectToDetails(id) {
        navigate(`/details/${id}`);
    }
    
    useEffect(() => {
        if (ename) {
            const searchEvent = async () => {
                const response = await searchConcerts(ename);
                setResults(response);
            };
            searchEvent();
        }
    }, [ename]);

    function handleClickEvent(Eid) {
        alert(Eid);
        // navigate('/event/'+Eid);
    }

    return (
        <div className="container">
            <Navigation/>
            <div className="row">
                <div className="input-group search-width">
                    <input className="form-control "
                     type="text" value={search}
                     onChange={(event) => setSearch(event.target.value)}/>
                     <button className="btn btn-primary"
                        onClick={searchButtonHandler}
                     >Search</button>
                </div>
                
                <div className=" d-flex justify-content-center">
                    <ul className="list-group  text-light">
                {results.length > 0 && results.map((result) => {
                    return (
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2 mt-2 ">
                                    <img src={result.Eimage}
                                         className="img-fluid rounded"
                                         alt={"event pic"}  />
                                </div>
                                <div className="col-8">
                                    <div className="ms-3">
                                        <div className="about">
                                            <div className="h3 text-light">{result.Ename}</div>
                                            <div className="h4 text-light">{result.Edescription}</div>
                                            <div className="h5 text-light">
                                                <span className="text-dark"><b>Location:</b></span>
                                                {result.Elocation}</div>
                                            <div className="h5 text-light">
                                                <span className="text-dark"><b>Date:</b></span>
                                                {result.Edate}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-secondary" onClick={() => redirectToDetails(result._id)}>Details</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default SearchComponent;