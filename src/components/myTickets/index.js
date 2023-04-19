import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "../../Home/Navigation/index.js";
import {loggedInUserTickets} from '../../Services/myTickets-service.js'
import { useSelector } from "react-redux";
import "./index.css";

const MyTicketsComponent = () => {
    const [results, setResults] = useState([]);
    const {u} = useSelector(state => state.UserLogin);
    
    useEffect(() => {
        const getLoggenInUserTickets = async () => {
            const response = await loggedInUserTickets(u._id);
            setResults(response);
        };
        getLoggenInUserTickets();
    }, [u._id]);
    return (
        <div>
            <div className="container">
            <Navigation/>
            <div className="h1 text-dark text-center bg-info">My Tickets</div>
            <div className="row">
                
                <div class="container d-flex justify-content-center">
                    <ul class="list-group">
                {results.length > 0 && results.map((result) => {
                    return (
                        <li class="list-group-item ">
                             <div className="row">
                                <div class="col-2 mt-2">
                                    <img src={result.event.Eimage}
                                    className="img-fluid rounded"
                                    alt={"event pic"}  />
                                </div>
                                <div className="col-10">
                                    <div className="ms-3">
                                        <div className="about">
                                            <div className="h3 text-light">{result.event.Ename}</div>
                                            <div className="h4 text-light">{result.event.Edescription}</div>
                                            <div className="h5 text-light"><span className="text-dark"><b>Location:</b></span>{result.event.Elocation}</div>
                                            <div className="h5 text-light"><span className="text-dark"><b>Date:</b></span>{result.event.Edate}</div>
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
        </div>
    )
}

export default MyTicketsComponent;
