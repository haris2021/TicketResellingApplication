import "./index.css";
import React from "react";
import Navigation from "../../Home/Navigation/index.js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchConcerts } from '../../Services/search-service.js'

const SearchComponent = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const ename = queryParam.get("Ename");
    const [search, setSearch] = useState(ename);
    const [results, setResults] = useState({});
    let navigate = useNavigate();
    const searchButtonHandler = () => {
        navigate('/search?Ename='+search);
    }
    const searchEvent = async () => {
        const response = await searchConcerts(ename);
        setResults(response);
    };
    if (ename) {
        searchEvent();
    }
    return (
        <div className="container">
            <Navigation/>
            <div className="row">
                <div className="input-group search-width">
                    <input className="form-control "
                     type="text" placeholder="Search for concerts, sports, and more"
                     onChange={(event) => setSearch(event.target.value)}/>
                     <button className="btn btn-primary"
                        onClick={searchButtonHandler}
                     >Search</button>
                </div>
                
                <div class=" d-flex justify-content-center">

                    <ul class="list-group  text-light">
                {results.length > 0 && results.map((result) => {
                    return (
                        <li class="list-group-item  ">
                             <div className="row">
                                <div class="col-2 mt-2 ">
                                    <img src={result.Eimage}
                                    className="img-fluid rounded"
                                    alt={"event pic"}  />
                                </div>
                                <div className="col-10">
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