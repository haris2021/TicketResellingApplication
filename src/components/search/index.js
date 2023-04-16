import React from "react";
import Navigation from "../../Home/Navigation/index.js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchConcerts } from '../../Services/search-service.js'
import "./index.css";

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
                
                <div class="container d-flex justify-content-center">

                    <ul class="list-group  text-light">
                {results.length > 0 && results.map((result) => {
                    return (
                        <li class="list-group-item d-flex justify-content-between align-content-center">
                             <div className="row">
                                <div class="col-4 ">
                                    <img src="https://hbomax-images.warnermediacdn.com/images/GX9q5dgf0LMILwgEAAAF0/tile?size=1280x720&format=jpeg&partner=hbocom&v=a024e04a96b526e734f81f7fe74de1c3&host=art-gallery.api.hbo.com&w=1200" 
                                    className="img-fluid rounded"
                                    alt={"event pic"}  />
                                </div>
                                <div className="col-8">
                                    <div class="ms-3">
                                        <div class="about">
                                            <div className="h3 text-light">{result.Ename}</div>
                                            <div className="h4 text-light">{result.Edescription}</div>
                                            <div className="h5 text-light">Location: {result.Elocation}</div>
                                            <div className="h5 text-light">Date: {result.Edate}</div>
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